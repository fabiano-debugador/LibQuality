const express = require('express');
const app = express();
const fetch = require('node-fetch');
const consign = require('consign');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
consign()
    .include('app/routes')
    .then('app/controllers')
    .into(app)


module.exports = app;

