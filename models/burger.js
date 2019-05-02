var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  
  create: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      console.log(res);
      cb(res);
    });
  },
  updateOne: function(id, devoured, cb) {
    orm.updateOne(id, devoured, function(res) {
      cb(res);
      console.log('update inputs:');
      console.log('condition', condition, '\n devoured:', devoured)
    });
  }
};

module.exports = burger;




// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(condition, cb) {
//     orm.delete("burgers", condition, function(res) {
//       cb(res);
//     });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;
