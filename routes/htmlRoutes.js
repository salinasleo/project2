
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
    .then(function(responseObj) {
      console.log(responseObj);
      // into the main index, updating the page
      var hbsObject = { results: responseObj };
      return res.render("search", hbsObject);
        
    });
 });
app.post("/api/search", function(req, res){
  // console.log(JSON.stringify(req.body));
  db.Mentor.findAll({
    where: {
      occupation1: req.body.occupations[0],
      occupation2: req.body.occupations[1],
      occupation3: req.body.occupations[2]
    }
  }).then(function(stuff){
    console.log(stuff);
    var mentorObj = { results: stuff };
    return res.render("search", mentorObj);
  })
});
 

 app.get("/search/:apiparams", function(req, res){
  var chosen = req.params.occupation1;
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


  // // // This function grabs todos from the database and updates the view
  // function matchingFunction() {
  //   app.get("/search", function(data) {
  //     matches = data;
  //     initializeRows(data);
  //   });
  // }





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

  // db.Mentor.create  ({
  //   firstName: 'Nemo',
  //   lastName: 'Disney',
  //   email: 'nemo@gmail.com',
  //   zipCode: '30332', 
  //   occupation1: 'Construction and Extraction', 
  //   occupation2: 'Education, Training, and Library', 
  //   occupation3: 'Farming, Fishing, and Forestry', 
  //   experienceBlurb: 'i get lost', 
  //   dayLikeBlurb: 'i swim', 
  //   userType: "Mentor"
  // }).then(function(data) {
  //   console.log(data);
  // });

  db.Mentor.create ({ firstName: 'Leo', lastName: 'Salinas', email: 'salinasleo@gmail.com', zipCode: '23229', occupation1: 'Business and Financial Operations ', occupation2: ',Management ', occupation3: 'Computer and Mathematical ', experienceBlurb: 'I have extensive experience in data analytics working at large financial institutions. I have also worked as an economist and a researcher.', dayLikeBlurb: 'You will watch me work on whatever answer I am trying to arrive at, you will see how I use software and how I summarize data.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Sharon', lastName: 'Fariss', email: 'sjfarisr@gmail.com', zipCode: '23113', occupation1: 'Healthcare Support ', occupation2: ',Education, Training, and Library ', occupation3: 'Business and Financial Operations', experienceBlurb: 'I have 20 years experience working in Practice Management, my specialty area is Orthodontics, but have worked held positions in medical and general dentistry as well.', dayLikeBlurb: 'You can observe my day working with clients in any number of healthcare fields. I am also willing to take on individuals for short term internships.  These internships would allow for a deeper level of understanding and learning by being traied to perform certain parts of the job indipendently.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Marc', lastName: 'Fariss', email: 'mwfariss@gmail.com', zipCode: '23288', occupation1: 'Life, Physical, and Social Science ', occupation2: ',Healthcare Practitioners and Technical ', occupation3: '', experienceBlurb: '25 years experience as a professor of toxicology. 12 years experience in industry doing research for a pharmacuetical company', dayLikeBlurb: 'You can shadow me on a day of research in the laboratory.  You will observe planning and layout of a research experiment and view the experiement being completed and observe the results meeting at the end of the day with the strategy for next steps.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Nina', lastName: 'Pluskowski', email: 'pluskown@hatmail.com', zipCode: '23232', occupation1: 'Healthcare Practitioners and Technical ', occupation2: ',Office and Administrative Support ', occupation3: '', experienceBlurb: '10 years experience as a Nurse Practitioner for several practices.', dayLikeBlurb: 'Requirement: RN.  As an RN you can shadow my day as a Nurse Practtioner in a busy family practice.  The day will start with morning meetings, seeing scheduled patients and ordering lab work, entering emr records and end around 7:00 pm with a final review of records of all patients seen that day and outcomes or re appoints.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Donad ', lastName: 'Jones', email: 'dcjones@gmail.com', zipCode: '23261', occupation1: 'Food Preparation and Serving Related ', occupation2: ',Arts, Design, Entertainment, Sports, and Media ', occupation3: '', experienceBlurb: 'Owner and operator of an Italian restaurant.', dayLikeBlurb: 'My normal day consists of checking in with staff to make sure all shifts are covered.  Reviewing inventory and inspecting food and vegetables that have arrived for the day.  Planning specials and working with kitchen staff on duties for lunch and dinner shifts. Reviwing alohol orders and inventory. Troubleshooting any problems and making sure things run smoothly.  Working with staff on clean up and closing.  Preparing for the next day.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Rhonda', lastName: 'Robbins', email: 'rrobins@yahoo.com', zipCode: '23278', occupation1: 'Office and Administrative Support ', occupation2: ',Legal ', occupation3: '', experienceBlurb: 'Legal Secretary at Jones & Jones', dayLikeBlurb: 'I arrive at 7:00 am.  Meet with the 4 Lawyers I work with as far as what is top priority for the day.  Make sure client files are up to date. Make travel arrangements if necessary.  Prepare necessary paperwork for trial cases that week.  All around whatever is needed, from coffee to running papers to the courthouse.  Can shadow or intern for a longer period if would like to know more.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Michael', lastName: 'Jagger', email: 'mpjagger@gmail.com', zipCode: '23293', occupation1: 'Arts, Design, Entertainment, Sports, and Media ', occupation2: ',', occupation3: '', experienceBlurb: 'Worlds greatest Rock and Roll star', dayLikeBlurb: 'Read reviews of shows. Work with PR department.  Work on my memoirs with writer. Prepare for show. Perform show.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Jacob', lastName: 'Cale', email: 'jjcale@hotmail.com', zipCode: '23298', occupation1: 'Installation, Maintenance, and Repair ', occupation2: ',', occupation3: '', experienceBlurb: 'Building Maintenance Manager at RC Development.', dayLikeBlurb: 'Day starts at 7:00am.  I review resident requests, set support staff schedule for the day. Check in inventor that has arrived.  Place orders for new inventory.  Visit resident locations to fix various issues from plumbing to electrical problems.  Fill out all logs at end of day. Communicate with residents if problem will take longer to resolve.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Nathin', lastName: 'Young', email: 'ncyoung@gmail.com', zipCode: '23290', occupation1: 'Architecture and Engineering ', occupation2: ',Management ', occupation3: '', experienceBlurb: 'Staff Architect at Slidel Development Co.', dayLikeBlurb: 'Work on client jobs for plans for constructing bblueprints for large development projects.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Jay', lastName: 'Johnsen', email: 'jayjohnsen@farmworkers.com', zipCode: '23269', occupation1: 'Farming, Fishing, and Forestry ', occupation2: ',Food Preparation and Serving Related ', occupation3: '', experienceBlurb: 'Dairy Farmer', dayLikeBlurb: '5:30am look over all cows for health or problems.  Feed. Check all milking equipment and refrigerator temperarature.  Set up milking equipment.  Milk cows. Let out in pasture. Take care of any visits from the vet. Maintenance issues. Get cows back into barn, set up milking equipment and milk again. Let out in pasture. Put feed out. Get cows in for the evening.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Sarah', lastName: 'Simpkin', email: 'slsimpkin@rileyllc.com', zipCode: '23231', occupation1: 'Personal Care and Service ', occupation2: ',Office and Administrative Support ', occupation3: '', experienceBlurb: 'Hair Stylist', dayLikeBlurb: 'Check schedule for the day. Make sure all inventory for my clients is available. See clients.  Do haircuts, coloring, highlighting, special tretments and hair design for specia occasions.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Happy', lastName: 'Anderson', email: 'hhappy@yahoo.com', zipCode: '23226', occupation1: 'Office and Administrative Support', occupation2: ',Arts, Design, Entertainment, Sports, and Media ', occupation3: '', experienceBlurb: 'Administrative professional for 30 years.', dayLikeBlurb: 'I spend the day filing, typing and taking messages.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'John', lastName: 'Smith', email: 'jon.smith@gmail.com', zipCode: '23227', occupation1: 'Installation,Maintenance,and Repair', occupation2: ',Installation, Maintenance, and Repair ', occupation3: '', experienceBlurb: 'HVAC Installer for 50 years', dayLikeBlurb: 'If you are hot, I cool you off.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Peggy', lastName: 'Fleming', email: 'peggy.fleming@yahoo.com', zipCode: '23228', occupation1: 'Education,Training,and Library', occupation2: ',Architecture and Engineering ', occupation3: '', experienceBlurb: 'Teacher for 60 years', dayLikeBlurb: 'I teach young children to love to learn.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Dorothy', lastName: 'Hamil', email: 'dorothyhamil@yahoo.com', zipCode: '23229', occupation1: 'Production', occupation2: ',Farming, Fishing, and Forestry ', occupation3: '', experienceBlurb: 'Producer of the stars', dayLikeBlurb: 'I help make movie magic!', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Ralph', lastName: 'Machio', email: 'ralph.machio@gmail.com', zipCode: '23220', occupation1: 'Business and Financial Operations', occupation2: ',Personal Care and Service ', occupation3: '', experienceBlurb: 'I make money for people', dayLikeBlurb: 'I invest money in great places.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Billy ', lastName: 'Zabka', email: 'billy.zabka@yahoo.com', zipCode: '23227', occupation1: 'Life,Physical,and Social Science', occupation2: ',Office and Administrative Support', occupation3: '', experienceBlurb: 'I study science to make peoples lives better', dayLikeBlurb: 'I spend my days studying microscopic organisms to find solutions to real world problems. ', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Tina', lastName: 'Turner', email: 'tinydancer@yahoo.com', zipCode: '23226', occupation1: 'Transportation and Material Moving', occupation2: ',Installation,Maintenance,and Repair', occupation3: '', experienceBlurb: 'I help make transportation smoother for everyone', dayLikeBlurb: 'I drive things around.  ', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Joe', lastName: 'Schmoe', email: 'abugslife@gmail.com', zipCode: '23228', occupation1: 'Sales and Related', occupation2: ',Education,Training,and Library', occupation3: '', experienceBlurb: 'I sell things to people.', dayLikeBlurb: 'I package and sell things to make lots of money.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Jane', lastName: 'Doedoe', email: 'lifeinthefastlane@yahoo.com', zipCode: '23229', occupation1: 'Healthcare Support', occupation2: ',', occupation3: '', experienceBlurb: 'I make sure the doctors and nurses have what they need', dayLikeBlurb: 'I order and inventory stock, make schedules and organize support personnel.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Blanche', lastName: 'Boudoir', email: 'gogetemtiger@gmail.com', zipCode: '23221', occupation1: 'Architecture and Engineering', occupation2: ',', occupation3: '', experienceBlurb: 'I fix old buildings', dayLikeBlurb: 'I work in Autocad and with old school drawings to renovate old homes.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Billy ', lastName: 'Bobbiescum', email: 'cancandancer@gmail.com', zipCode: '23220', occupation1: 'Personal Care and Service', occupation2: ',', occupation3: '', experienceBlurb: 'Aesthetician', dayLikeBlurb: 'I help people look gorgeous.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Sandra', lastName: 'McCandies', email: 'sandramccandies@mail.gov', zipCode: '23235', occupation1: 'Transportation and Material Moving ', occupation2: ',Management ', occupation3: 'Office and Administrative Support', experienceBlurb: 'I have extensive experience in data analytics working at large financial institutions', dayLikeBlurb: 'You will watch me work on whatever answer I am trying to arrive at, you will see how I use software and how I summarize data.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Teya', lastName: 'Moore', email: 'teyasmoore@mail.gov', zipCode: '23801', occupation1: 'Office and Administrative Support ', occupation2: ',Community and Social Service ', occupation3: 'Management', experienceBlurb: 'Masters in Social Work; Various experiences in community services, social services, managing offices, quality assurance.', dayLikeBlurb: 'Shadow me on how a day in the life of a social worker is and the struggles some people have in the local community.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Caron', lastName: 'Feldman', email: 'caronrfeldman@mail.com', zipCode: '23831', occupation1: 'Office and Administrative Support ', occupation2: ',Business and Financial Operations ', occupation3: 'Management', experienceBlurb: 'Former teacher. Now in government work.', dayLikeBlurb: 'Learn how a training installation in-processes and out-process incoming military personnel', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Tim', lastName: 'Day', email: 'timday@yahoo.com', zipCode: '23850', occupation1: 'Installation, Maintenance, and Repair ', occupation2: ',Construction and Extraction ', occupation3: 'Building and Grounds Cleaning and Maintenance ', experienceBlurb: 'Professional maintenance and repair across residential and commercial properties.', dayLikeBlurb: 'Spend a day with a handy-man who runs his own business. Long rigorous days!', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Brian', lastName: 'Waller', email: 'brianwaller@longwood.edu', zipCode: '23909', occupation1: 'Business and Financial Operations ', occupation2: ',Education, Training, and Library ', occupation3: '', experienceBlurb: 'Real Estate and Finance Expert. Lead Professor at University.', dayLikeBlurb: 'Learn the real estate business and how real estate fluctuates based on several economic factors. Also, become a student assistant to a Business school professor.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Haylee', lastName: 'Foster', email: 'hayleefoster@mail.kenner.gov', zipCode: '23801', occupation1: 'Community and Social Service ', occupation2: ',Healthcare Practitioners and Technical ', occupation3: 'Healthcare Support ', experienceBlurb: 'Former Air Force personnel. Government employee sepcializing in Family service and Healthcare support.', dayLikeBlurb: 'Learn military regulations regarding family travel and the conditions and circumstances that military family face with regards to limitations based on mental, physical or other considerations. Healt Clinic environment.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Michael', lastName: 'Westmoreland', email: 'michaelwestmoreland@yahoo.com', zipCode: '23803', occupation1: 'Farming, Fishing, and Forestry ', occupation2: ',Food Preparation and Serving Related ', occupation3: 'Installation, Maintenance, and Repair ', experienceBlurb: 'Professional fisherman, cook, and handyman.', dayLikeBlurb: '"Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime."', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Ashley', lastName: 'Vreeland', email: 'ashleyvreeland@vcuarts.edu', zipCode: '23875', occupation1: 'Healthcare Support ', occupation2: ',Healthcare Practitioners and Technical ', occupation3: 'Arts, Design, Entertainment, Sports, and Media ', experienceBlurb: 'Recent graduate! VCU Arts alumni and Certified Occupational Therapist Assistant.', dayLikeBlurb: 'Learn the importance of Occupational therapy and the growing field! OR enjoy some nice art classes with me. Specialize in sculpture.', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Theresa', lastName: 'Porter', email: 'theresaporter@gmail.com', zipCode: '23803', occupation1: 'Healthcare Support ', occupation2: ',Healthcare Practitioners and Technical ', occupation3: 'Food Preparation and Serving Related ', experienceBlurb: '', dayLikeBlurb: '', userType: 'Mentor' }).then(function(data) { console.log(data); });
  db.Mentor.create ({ firstName: 'Pamela', lastName: 'Marshall', email: 'pamelamarshall@mail.gov', zipCode: '23801', occupation1: 'Computer and Mathematical ', occupation2: ',Office and Administrative Support ', occupation3: 'Installation, Maintenance, and Repair ', experienceBlurb: '', dayLikeBlurb: '', userType: 'Mentor' }).then(function(data) { console.log(data); });
  

