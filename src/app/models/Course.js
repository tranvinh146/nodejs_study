const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, default: ' ' },
  description: { type: String, maxlength: 511 },
  image: { type: String, maxlength: 511 },
  slug: { type: String, maxlength: 255 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: String, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
