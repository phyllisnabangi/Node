const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  path:  { type: String },
  caption: { type: String }
  });
module.exports = mongoose.model('Photos', photoSchema)