const { Router } = require('express');
var router = Router();
const axios = require('axios');


// Middlewares
var middlewares = require('../Middleware/middleware');
var middlewareAgent = middlewares.middlewareAgent;

const Refresh = () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('client_id', '1455898828251959');
    params.append('client_secret', '1PnYgijqC7dtBiWLaWhnifpYGEwJVaUz');
    params.append('code', 'TG-61041f62a257fc0007f5ae6f-7022064');
    params.append('refresh_token', 'APP_USR-1455898828251959-073015-b96cabeca0bc81cef361d5aa717d5a23-7022064');

    axios.post('https://api.mercadolibre.com/oauth/token', params)
        .then(function (response) {
            console.log(response.data.access_token);
        })
        .catch(function (error) {
            console.log(error);
        })
}

router.get('/', middlewareAgent, function (req, res, next) {
    let endpoints = [];
    router.stack.forEach(dato => {
        endpoints.push(dato.route.path);
    });
    var respuesta = {
        Valor: 1,
        Mensaje: 'Api TestFrontEnd',
        endpoints
    };
    res.send(respuesta);
});

router.get('/api/auth', middlewareAgent, function (req, res, next) {
    let code = req.query.code;

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', '1455898828251959');
    params.append('client_secret', '1PnYgijqC7dtBiWLaWhnifpYGEwJVaUz');
    params.append('code', code);
    params.append('redirect_uri', 'http://localhost:3000/auth');
    //console.log(params);
    axios.post('https://api.mercadolibre.com/oauth/token', params)
        .then(function (response) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response.data.access_token))
        })
        .catch(function (error) {
            console.log(error);
        })
});

router.get('/api/items', middlewareAgent, function (req, res) {
    let q = req.query.q;
    var token = req.headers.authorization.split(" ")[1];
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + q + '&limit=4', config)
        .then(async function (response) {
            let ReturnArray = [];
            let Author = [];
            let Items = [];
            let category;
            res.setHeader('Content-Type', 'application/json');
            for (const Prod in response.data.results) {

                const ID = response.data.results[Prod]['seller']['id'];
                const dato = await axios.get(`https://api.mercadolibre.com/users/${ID}`, config);
                console.log(dato.data.first_name);
                Author.push(
                    {
                        "name": 'dato.data.first_name',
                        "lastname": 'dato.data.last_name'
                    }
                )
                Items.push(response.data.results[Prod]);
                const IdCategory = response.data.results[Prod]['category_id'];
                category = await axios.get(` https://api.mercadolibre.com/categories/${IdCategory}`, config);
                //console.log(IdCategory);


                //console.log(response.data.results[Prod]);
                //ReturnArray.push(Author);
            }
            const Respuesta = {
                'Author': Author,
                "Category": category.data.path_from_root,
                "Items": Items
            }
            ReturnArray.push(Respuesta);
            //console.log(response.data.results);
            res.send(JSON.stringify(ReturnArray));
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
});

router.get('/api/items/:id', middlewareAgent, function (req, res) {
    let id = req.params.id;
    var token = req.headers.authorization.split(" ")[1];
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    };
    res.setHeader('Content-Type', 'application/json');
    //res.send(config);
    axios.get(`https://api.mercadolibre.com/items/${id}`, config)
        .then(async function (response) {

            const category = await axios.get(` https://api.mercadolibre.com/categories/${response.data.category_id}`, config);
            const detail = await axios.get(` https://api.mercadolibre.com/items/${id}/description`, config);

            response.data.condition == 'used' ? response.data.condition = 'Usado' : response.data.condition = 'Nuevo';
            const Data = {
                title: response.data.title,
                category: category.data.path_from_root,
                price: response.data.price,
                detail: detail.data.plain_text,
                thumbnail: response.data.pictures[0].url,
                condition: response.data.condition,
                sold_quantity: response.data.sold_quantity
            }
            res.send(Data);
        });
});

module.exports = router;