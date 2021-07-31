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

    axios.post('https://api.mercadolibre.com/oauth/token', params )
    .then(function (response){
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
    axios.post('https://api.mercadolibre.com/oauth/token', params )
    .then(function (response){
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(response.data.access_token))
    })
    .catch(function (error) {
        console.log(error);
    })
});

router.get('/api/items', middlewareAgent, function (req, res) {
    let q = req.query.q;
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + q + '&limit=1')
        .then(function (response) {
            res.setHeader('Content-Type', 'application/json');
            for (const Prod in response.data.results) {


                console.log(response.data.results[Prod]['author']);
            }
            res.send(JSON.stringify(response.data.results));
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
        });
});

router.get('/api/items/:id', middlewareAgent, function (req, res) {
    let q = req.query.q;
    // https://api.mercadolibre.com/items/:id
    // https://api.mercadolibre.com/items/:id/description
});

module.exports = router;