const { Router } = require('express');
var process = require('process');


// Datos de la consulta
var middlewareAgent = function (req, res, next) {
    let now = new Date();
    console.info(now, process.pid, req.originalUrl.split("?").shift(), req.query, req.headers['user-agent']);
    next();
};



module.exports = {
    middlewareAgent: middlewareAgent
}