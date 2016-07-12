var db = require('../database/config');

var Record = require('../database/models/record');

exports.getComputation = function(req, res) {
  Record.find({type: 'computation'}, function(err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
  });
};

exports.getPeer = function(req, res) {
  Record.find({type: 'peer'}, function(err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
  });
};

exports.getUserRequest = function(req, res) {
  Record.find({type: 'request'}, function(err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
  });
};

exports.postComputation = function(req, res) {
  var newComputation = makeRecord(req, 'computation');

  newComputation.save(function(err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
  });
};

exports.postPeer = function(req, res) {
  var newPeer = makeRecord(req, 'peer');

  newPeer.save(function(err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
  });
};

exports.postUserRequest = function(req, res) {
  var newRequest = makeRecord(req, 'request');

  newRequest.save(function(err, entry) {
    if (err) {
      res.send(404, err);
    }

    res.send(200, entry);
  });
};

var makeRecord = function(req, type) {
  return new Record({
    type: type,
    description: req.body.description,
    content: req.body.content
  });
};