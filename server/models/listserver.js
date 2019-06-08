var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ListSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'], minlength: [1, 'Minimum length is 1'] },
  completed: {type: Boolean, }, //
  // name: { type: String, required: [true, 'Name is required'], minlength: [3, ''] },
  // description: { type: String, required: [true, 'Description is required'], minlength: [3, 'Pet description text length must be at least 3 charcters long'] },
  // type: { type: String, required: [true, 'Type is required'], minlength: [3, 'Pet type text length must be at least 3 charcters long'] },
  // likes: { type: Number, default: 0 },
  // skill1: { type: String, default: '' },
  // skill2: { type: String, default: '' },
  // skill3: { type: String, default: '' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
mongoose.model('List', ListSchema);
var List = mongoose.model('List');

module.exports = List;
