'use strict';

var db = require('../database/config');

var Record = require('../database/models/record');

exports.getComputation = function (req, res) {
  Record.find({ type: 'computation' }, function (err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
  });
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
  var newComputation = makeRecord(req, 'computation');

  newComputation.save(function (err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
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

var makeRecord = function makeRecord(req, type) {
  return new Record({
    type: 'computation',
    description: req.body.description,
    content: req.body.content
  });
};