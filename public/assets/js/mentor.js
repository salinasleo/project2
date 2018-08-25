var occupation = [];

$(document).ready(function() {
    
    $("#MentorSubmit").on("click", function(event) {
      event.preventDefault();

      console.log("Mentor registration form submitted");
      console.log("Email input is " + document.getElementById("email").value);
      console.log("First Name is " + document.getElementById("firstName").value);
      console.log("Last Name is " + document.getElementById("lastName").value);
      console.log("Zip Code is " + document.getElementById("zipCode").value);
    //   console.log("Occupations interested in are " + document.getElementById("occupations").value);
    //   console.log("Occupations # 1 interested in are " + document.getElementById("occupations")[0].value);
    //   console.log("Occupations # 2 interested in are " + document.getElementById("occupations")[1].value);
    //   console.log("Occupations # 3 interested in are " + document.getElementById("occupations")[2].value);
      for ( var i = 0; i < Math.min(3,document.getElementById("occupations").selectedOptions.length); i++) {
        console.log("Occupation " + (i+1) + " interested in is " + document.getElementById("occupations").selectedOptions[i].value);
     
     occupation[i] = document.getElementById("occupations").selectedOptions[i].value;
      }
      console.log("Experience is " + document.getElementById("experienceBlurb").value);
      console.log("Day like is " + document.getElementById("dayLikeBlurb").value);
      console.log("User Type is Mentor");
  

        // make a mentor obj
  var newMentor = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    zipCode: document.getElementById("zipCode").value, 
    occupation1: occupation[0], 
    occupation2: occupation[1], 
    occupation3: occupation[2], 
    experienceBlurb: document.getElementById("experienceBlurb").value, 
    dayLikeBlurb: document.getElementById("dayLikeBlurb").value, 
    userType: "Mentor"
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/newmentor", newMentor)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding mentor...");
    });


    });
  });

