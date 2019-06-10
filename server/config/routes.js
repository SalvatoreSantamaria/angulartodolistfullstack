var mongoose = require('mongoose');
var List = mongoose.model('List');
var items  = require('../controllers/items');

module.exports = function(app) {
  // Get to retrieve all items
  app.get('/route', function(req, res) {
    items.showAll(req, res);
  });

  // Post to create
  app.post('/route', function (req, res) {
    console.log('from routes.js app.post')
    items.createOne(req, res);
  });

  // Put to update
  app.put('/route/:id', function (req, res) {
    items.updateOne(req, res);
  });

  // Delete to delete
  app.delete('/route/:id', function(req, res) {
  //  console.log('this is from routes.js', req.params.id);
    items.deleteOne(req, res);
  });

  // // not used in this project
  // // Get to retrieve by ID
  // app.get('/route/:id', function(req, res) {
  //   items.findOne(req, res);
  // });
};
