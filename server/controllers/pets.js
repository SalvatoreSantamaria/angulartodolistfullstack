var mongoose = require('mongoose');
var Pet = mongoose.model('List');

module.exports = {
  showAll: function(req, res) {
    Pet.find({}, function(err, pets) {
      if (err) {
        console.log('There is an error', err);
        // respond with JSON
        res.status(500).json({ message: 'There is an error', error: err }); //500 is an error code
      } else {
        // respond with JSON
        console.log('incoming pet data');
        res.json(pets);
      }
    });
  },

  createOne: function (req, res) {
    // console.log('createOne from pets.js, req.body.title is' , req.body.title)
    var pet = new Pet({
      title: req.body.title,
      completed: req.body.completed,

    });
    pet.save()
      .then(function(results) {
        console.log('To do Added!', results);
        res.json(results);
      })
      .catch(error => {
        const errors = Object.keys(error.errors)
        .map(key => error.errors[key].message)
        console.log("From controllers/pet.js. There are server errors ", errors)
        res.json({error: errors})
    });
  },


  updateOne: function(req, res) {
   // console.log('from updateOne, req.params.id is', req.params.id, 'and req.body.title is', req.body.title); 
    Pet.update(
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
    Pet.remove({ _id: req.params.id }, function(err, deletedPet) {
      if (err) {
        console.log('There is an error', err);
      } else {
        console.log('Pet deleted');
        res.json(deletedPet); //reponding with API
      }
    });
  },

  // findOne not used in this project.
  // findOne: function(req, res) {
  //   Pet.findOne({ _id: req.params.id }, function(err, pet) {
  //     if (err) {
  //       console.log('There is an error', err);
  //     } else {
  //       console.log('Pet found');
  //       // respond with JSON
  //       res.json({ data: pet });
  //     }
  //   });
  // },


};
