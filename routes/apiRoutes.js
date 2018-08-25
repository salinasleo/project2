var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  //app.post("/api/examples", function(req, res) {
  //  db.Example.create(req.body).then(function(dbExample) {
  //    res.json(dbExample);
  //  });
 // });
// If a new mentor registers...
app.post("/api/new", function(req, res) {
  // Take the request...
  var mentee = req.body;
  console.log(mentee);


  db.Mentee.create({
    firstName: mentee.firstName,
    lastName: mentee.lastName,
    email: mentee.email,
    zipCode: mentee.zipCode,
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
};
