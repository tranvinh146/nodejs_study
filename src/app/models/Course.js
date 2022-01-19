const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
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

//Custom  Query Helpers
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty('_sort')) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);

    return this.sort({
      [req.query.column]: isValidType ? req.query.type : 'asc',
    });
  }

  return this;
};

// Add plugin
mongoose.plugin(slug);
CourseSchema.plugin(AutoIncrement, { inc_field: 'id' });
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseSchema);
