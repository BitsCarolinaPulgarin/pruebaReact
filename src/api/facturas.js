const express = require('express');
const app = express();
const facturas = require('../data/facturas.json')
//const request = require('request')

var router = express.Router();

router.get('/facturas', function (req, res) {
    res.send(facturas);
});

app.use(router);

app.listen(8000, function () {
    console.log("Node server running on http://localhost:3000");
});