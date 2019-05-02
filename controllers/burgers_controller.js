var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log("hbsObject:")
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/burger', function(req, res){
    burger.create('"' + req.body.burgerName + '"', function(result){
        result.json({id: result.insertId});
        console.log('burger_controller--router.post: ', req.body.name )
    });
});

router.put('/api/burger/:id', function(req, res){
    //not running
    var id = req.params.id;
    var condition = "id = " + req.params.id;
    console.log("The condition is:" + condition);
    burger.updateOne(id, true, function(result){
        if (result.changedRows === 0){
            return res.status(404).send('Couldn\'nt find that one...').end();
        }
        res.status(200).end();
    });
});

module.exports = router;





// // Require express
// var express = require("express");

// // The router to handle the requests
// var router = express.Router();

// // Get our burger model
// var burger = require("../models/burger.js");

// // Get all the burgers in the database
// router.get("/", function(request, response) {
//     burger.all(function(data) {
//         var dbData = {
//             burgers: data
//         };
//         console.log(dbData);
//         response.render("index", dbData);
//     });
// });

// // Insert a new burger record into the database
// router.post("/api/burgers", function(request, response) {
//     burger.insertOne("burger_name", request.body.burger_name, function(result) {
//         response.json("Successfully created new burger!");
//     });
// });

// // Devour a burger from the list
// router.put("/api/burgers/:id", function(request, response) {
//     var burgerId = request.params.id;
//     var devouredState = request.body.devoured;
//     console.log("Burger Id: " + burgerId);
//     burger.updateOne("devoured", devouredState, "id", burgerId, function(result) {
//         // Check for updated rows
//         if (result.changedRows == 0) {
//             response.status(404).end();
//         } else {
//             response.status(200).end();
//         }
//     });
// });

// // Export router for the server to use
// module.exports = router;




// var express = require("express");

// var router = express.Router();

// var burger = require("../models/burger.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   burger.all(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/api/burgers", function(req, res) {
//   burgers.create([
//     "name", "devoured"
//   ], [
//     req.body.name, req.body.devoured
//   ], function(result) {
//     // Send back the ID of the new quote
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/burgers/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
