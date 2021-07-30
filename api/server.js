var express = require('express');
var cors = require('cors');
var helmet = require('helmet');
var compression = require('compression');
var useragent = require('express-useragent');
var bodyParce = require('body-parser');
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

process.title = 'api-TestFronEnd';

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        // Create a worker
        cluster.fork();
    }
    let now = new Date();
    console.log(now, 'API - api-TestFronEnd');
    cluster.on('exit', (worker, code, signal) => {
        now = new Date();
        console.log(now, `worker ${worker.process.pid} died`);
    });
} else if (cluster.isWorker) {
    var app = express();
    app.use(cors());
    app.use(bodyParce.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(useragent.express());
    app.use(helmet());
    app.use(helmet.xssFilter())
    app.use(helmet.frameguard())
    app.use(helmet.hidePoweredBy());
    app.use(compression());

    app.use(require('./routers/router'));


    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config({ path: 'config.env' });
    }
    const PORT = process.env.PORT || 5300;


    app.listen(PORT, function (req, res) {
        let now = new Date();
        console.log(now, 'Escuchando en puerto : ' + PORT + ' worker: ' + cluster.worker.id + ' id de proceso: ' + process.pid);
    });

}