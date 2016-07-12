var mongoose = require('mongoose');

var recordSchema = mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
}, { timestamps:
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

var Record = mongoose.model('Record', recordSchema);

module.exports = Record;
