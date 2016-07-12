'use strict';

var mongoose = require('mongoose');

var recordSchema = mongoose.Schema({
  style: { type: String, required: true, index: { unique: true } },
  content: String
}, { timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

var Record = mongoose.model('Record', recordSchema);

module.exports = Record;