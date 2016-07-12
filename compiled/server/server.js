'use strict';

var handler = require('../lib/requestHandler');

var express = require('express');
var partials = require('express-partials');

var app = express();

app.configure(function () {
  app.use(partials());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/../'));
});

app.get('/api/computation', handler.getComputation);
app.get('/api/peer', handler.getPeer);
app.get('/api/userRequest', handler.getUserRequest);

app.post('/api/computation', handler.postComputation);
app.post('/api/peer', handler.postPeer);
app.post('/api/userRequest', handler.postUserRequest);

module.exports = app;