'use strict';

const express = require('express')
const app = express()

function handleLocalFiles(req, res, next) {
    app.get('/rest/:file', (req, res) => {
        console.log('req: ', req);
        console.log('/rest/:file __dirname: ', __dirname + '/app' + req.url);
        res.sendFile(path.resolve(__dirname + '/app' + req.url));
    });

    //res.sendFile(path.resolve(__dirname + '/app' + req.url));


    next();
}

module.exports = {
    server: {
        middleware: {
            2: handleLocalFiles
        }
    }
}