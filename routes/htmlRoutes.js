
var db = require("../models");



module.exports = function (app) {

  app.get("/mentee", function (req, res) {
    res.render("menteeSurvey");
  });

  app.get("/mentor", function (req, res) {
    res.render("mentorSurvey")
  });

  app.get("/FAQroute", function (req, res) {
    res.render("FAQ")
  });

  app.get("/homeRoute", function (req, res) {
    res.render("index")
  });


  // app.get("/search", function(req, res) {
  
  //     res.render("search")
  // });


  // Load index page
  app.get("/", function (req, res) {
    // db.Example.findAll({}).then(function(dbExamples) {
      res.render("index");
    // });
  });

  var matches = [];

  // app.get("/search", function(req, res) {
  //   db.Mentor.findAll({
  //     where: {occupation1: 'Architecture and Engineering'
  //   }
  //   }).then(function(getMatches) {
  //     console.log(getMatches);
  //   //  menteeMatches = res.json(getMatches) ;
  //     res.render("search", {
  //       // msg: "Welcome!",
  //       results: /*passMatches(getMatches)*/  getMatches.dataValues
  //     });
  //     // publishHits(getMatches);
    
  //   });
  // });


  // get route, edited to match sequelize
app.get("/search", function(req, res) {
  // replace old function with sequelize function
  db.Mentor.findAll()
    // use promise method to pass the burgers...
    .then(function(responseObj) {
      console.log(responseObj);
      // into the main index, updating the page
      var hbsObject = { results: responseObj };
      return res.render("search", hbsObject);
    });
 });

  // function passMatches(data) {
  // matches = data.json({});
  // console.log(matches);
  // };



  

  // Getting todos from database when page loads
  // matchingFunction();

  // // This function resets the todos displayed with new todos from the database
  // function publishHits(data) {
  //   $matches.empty();
  //   var rowsToAdd = [];
  //   for (var i = 0; i < data.length; i++) {
  //     rowsToAdd.push(createNewRow(data[i]));
  //   }
  //   $matches.prepend(rowsToAdd);
  // }


  // // This function grabs todos from the database and updates the view
  function matchingFunction() {
    app.get("/search", function(data) {
      matches = data;
      initializeRows(data);
    });
  }





  // // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });


};


  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes

  db.Mentor.create  ({
    firstName: 'Nemo',
    lastName: 'Disney',
    email: 'nemo@gmail.com',
    zipCode: '30332', 
    occupation1: 'Construction and Extraction', 
    occupation2: 'Education, Training, and Library', 
    occupation3: 'Farming, Fishing, and Forestry', 
    experienceBlurb: 'i get lost', 
    dayLikeBlurb: 'i swim', 
    userType: "Mentor"
  }).then(function(data) {
    console.log(data);
  });