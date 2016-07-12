'use strict';

var db = require('../database/config');

var Record = require('../database/models/record');

exports.getComputation = function (req, res) {
  // TODO: Implement me!
  res.send(200, 'Route is working!');
};

exports.getPeer = function (req, res) {
  // TODO: Implement me!
  res.send(200, 'Route is working!');
};

exports.getUserRequest = function (req, res) {
  // TODO: Implement me!
  res.send(200, 'Route is working!');
};

exports.postComputation = function (req, res) {
  // TODO: Implement me!
  //res.send(200, 'Route is working!');
  var record = new Record({
    style: 'Hello world',
    content: 'JAWDROP'
  });

  record.save(function (err, newEntry) {
    if (err) {
      res.send(500, err);
    } else {
      res.send(200, newEntry);
    }
  });
};

exports.postPeer = function (req, res) {
  // TODO: Implement me!
  res.send(200, 'Route is working!');
};

exports.postUserRequest = function (req, res) {
  // TODO: Implement me!
  res.send(200, 'Route is working!');
};