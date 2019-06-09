var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ListSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'], minlength: [1, 'Minimum length is 1'] },
  completed: {type: Boolean, }, 
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
mongoose.model('List', ListSchema);
var List = mongoose.model('List');

module.exports = List;
