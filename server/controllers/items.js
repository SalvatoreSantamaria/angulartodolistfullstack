var mongoose = require('mongoose');
var Item = mongoose.model('List');

module.exports = {
  showAll: function(req, res) {
    Item.find({}, function(err, items) {
      if (err) {
        console.log('There is an error', err);
        // respond with JSON
        res.status(500).json({ message: 'There is an error', error: err }); //500 is an error code
      } else {
        // respond with JSON
        console.log('incoming item data');
        res.json(items);
      }
    });
  },

  createOne: function (req, res) {
    // console.log('createOne from items.js, req.body.title is' , req.body.title)
    var item = new Item({
      title: req.body.title,
      completed: req.body.completed,

    });
    item.save()
      .then(function(results) {
        console.log('To do Added!', results);
        res.json(results);
      })
      .catch(error => {
        const errors = Object.keys(error.errors)
        .map(key => error.errors[key].message)
        console.log("From controllers/item.js. There are server errors ", errors)
        res.json({error: errors})
    });
  },


  updateOne: function(req, res) {
   // console.log('from updateOne, req.params.id is', req.params.id, 'and req.body.title is', req.body.title); 
    Item.update(
      {
       _id: req.params.id,
      },
      {
        completed: req.body.completed,
      },
      function(error, data) {
        if (error) {
          console.log(error);
          res.json({
            message: 'There is an error',
            error: error,
          });
        } else {
          console.log('Data Updated! This is data', data);
          res.json({
            message: 'Success',
            data: data
          });
        }
      }
    );
  },

  deleteOne: function(req, res) {
    Item.remove({ _id: req.params.id }, function(err, deletedItem) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Item deleted');
        res.json(deletedItem); //reponding with API
      }
    });
  },

  // findOne not used in this project.
  // findOne: function(req, res) {
  //   Item.findOne({ _id: req.params.id }, function(err, item) {
  //     if (err) {
  //       console.log('There is an error', err);
  //     } else {
  //       console.log('Item found');
  //       // respond with JSON
  //       res.json({ data: item });
  //     }
  //   });
  // },


};
