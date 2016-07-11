'use strict';

var express = require('express');
var partials = require('express-partials');

var app = express();

app.configure(function () {
  app.use(partials());
  app.use(express.bodyParser());
  app.use(express.static(__dirname));
});

module.exports = app;