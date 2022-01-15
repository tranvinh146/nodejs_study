const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxlength: 511 },
    image: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
    videoId: String,
    level: String,
  },
  {
    timestamps: true,
  },
);

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
