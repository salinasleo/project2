var occupation = [];
$(document).ready(function() {
    
    $("#menteeSubmit").on("click", function(event) {
      // event.preventDefault();

      // console.log("Mentee registration form submitted");
      // console.log("Email input is " + document.getElementById("email").value);
      // console.log("First Name is " + document.getElementById("firstName").value);
      // console.log("Last Name is " + document.getElementById("lastName").value);
      // console.log("Zip Code is " + document.getElementById("zipCode").value);
    //   console.log("Occupations interested in are " + document.getElementById("occupations").value);
    //   console.log("Occupations # 1 interested in are " + document.getElementById("occupations")[0].value);
    //   console.log("Occupations # 2 interested in are " + document.getElementById("occupations")[1].value);
    //   console.log("Occupations # 3 interested in are " + document.getElementById("occupations")[2].value);
      for ( var i = 0; i < Math.min(3,document.getElementById("occupations").selectedOptions.length); i++) {
        console.log("Occupation " + (i+1) + " interested in is " + document.getElementById("occupations").selectedOptions[i].value);
        occupation[i] = document.getElementById("occupations").selectedOptions[i].value;
      }
      // console.log("Objective from program" + document.getElementById("objectives").value);
      // make a mentor obj
 var newMentee = {
  firstName: document.getElementById("firstName").value,
  lastName: document.getElementById("lastName").value,
  email: document.getElementById("email").value,
  zipCode: document.getElementById("zipCode").value,
  milesMeet: document.getElementById("milesMeet").value,
  occupation1: occupation[0],
  occupation2: occupation[1],
  occupation3: occupation[2],
  objectives: document.getElementById("objectives").value,
  userType: "Mentee"
};



// send an AJAX POST-request with jQuery
$.post("/api/newmentee", newMentee)
  // on success, run this callback
  .then(function(data) {
    // log the data we found
    // console.log(data);
     res.render("search");
    // tell the user we're adding a character with an alert window
   
  });



  // get route, edited to match sequelize
function getmatches()
$.get("/search/:apiparams")
    .then(function(responseObj) {
      console.log(responseObj);
    });
 });

  });

  
  
   
