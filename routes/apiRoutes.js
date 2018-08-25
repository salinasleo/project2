var db = require("../models");


// // Dependencies
// // =============================================================
// var mentor = require("../models/mentors.js");



module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

    // If a new mentor registers...
    app.post("/api/new", function(req, res) {
      // Take the request...
      var mentor = req.body;
      console.log(mentor);
      // var routeName = mentor.email.replace(/\s+/g, "").toLowerCase();
  
  
      db.Mentor.create({
        firstName: mentor.firstName,
        lastName: mentor.lastName,
        email: mentor.email,
        zipCode: mentor.zipCode,
        occupation1: mentor.occupation1, 
        occupation2: mentor.occupation2, 
        occupation3: mentor.occupation3,
        experienceBlurb: mentor.experienceBlurb, 
        dayLikeBlurb: mentor.dayLikeBlurb, 
        userType: mentor.userType
      });
    });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

// app.get("/api/search", function(req, res){
//   db.Mentors.findAll({
//     where: {
//       occupation1: req.query.userinput1,
//       occupation2: req.query.occupation2,
//       occupation3: req.query.occupation3
//     }
//   }).then(function(stuff){
//     res.render(stuff);
//   })
// });
