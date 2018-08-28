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
    app.post("/api/newmentor", function(req, res) {
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

    app.post("/api/newmentee", function(req, res) {
      // Take the request...
      var mentee = req.body;
      console.log(mentee);
      // var routeName = mentor.email.replace(/\s+/g, "").toLowerCase();

  db.Mentee.create({
    firstName: mentee.firstName,
    lastName: mentee.lastName,
    email: mentee.email,
    zipCode: mentee.zipCode,
    milesMeet: mentee.milesMeet,
    occupation1: mentee.occupation1,
    occupation2: mentee.occupation2,
    occupation3: mentee.occupation3,
    objectives: mentee.objectives,
    userType: mentee.userType
  });
});

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });


app.get("/search/:apiparams", function(req, res){
  db.Mentors.findAll({
    where: {
      occupation1: req.query.occupation1,
      occupation2: req.query.occupation2,
      occupation3: req.query.occupation3
    }
  }).then(function(stuff){
    res.render(stuff);
    return stuff;
  });
});

};
