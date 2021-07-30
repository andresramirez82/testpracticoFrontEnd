const { Router } = require('express');
var router = Router();
const axios = require('axios');


// Middlewares
var middlewares = require('../Middleware/middleware');
var middlewareAgent = middlewares.middlewareAgent;

const Token = () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', '1455898828251959');
    params.append('client_secret', '1PnYgijqC7dtBiWLaWhnifpYGEwJVaUz');
    params.append('code', 'TG-6104554d27e4a40008a32992-7022064');
    params.append('redirect_uri', 'http://localhost:5200/api/auth');

    axios.post('https://api.mercadolibre.com/auth/token', params )
    .then(function (response){
        console.log('access_token: ',response.data.access_token);
        localStorage.set('access_token',response.data.access_token);
    })
    .catch(function (error) {
        console.log(error);
    })
}

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
    Token();
    res.send(respuesta);
});

router.get('/api/auth', middlewareAgent, function (req, res, next) {
    console.log('AuthCode',req.query.code);
    //Token(req.query.code);
    res.send("logueado");
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