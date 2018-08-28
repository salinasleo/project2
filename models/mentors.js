
module.exports = function(sequelize, DataTypes) {
var Mentor = sequelize.define("Mentor", {

  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  zipCode: {type: DataTypes.STRING, allowNull: false},
  occupation1: DataTypes.STRING,
  occupation2: DataTypes.STRING,
  occupation3: DataTypes.STRING,
  experienceBlurb: {type: DataTypes.TEXT, allowNull: false},
  dayLikeBlurb: {type: DataTypes.TEXT, allowNull: true},
  userType: {type: DataTypes.STRING, defaultValue: Mentor},
});

return Mentor;

};




// id int Not Null AUTO_INCREMENT UNIQUE,
// -- 		mentorEmailAddress varchar(75) NOT NULL UNIQUE,
// -- 		userType  CHAR(6) DEFAULT "Mentor",
// -- 		mentorZip int(5)  NOT NULL,
// -- 		mentorEmail varchar(60)  NOT NULL,
// -- 		mentorfFirstName varchar(30) NOT NULL,
// -- 		mentorLastName varchar(30) NOT NULL,
// -- 		occupationGroup1 varchar(60) NOT NULL,
// -- 		occupationGroup2 varchar(60),
// -- 		occupationGroup3 varchar(60),
// --         mentorLinkedin_URL varchar(100),
// -- 		mentorPassword varchar (50) NOT NULL,
// -- 		experienceBlurb text(800) NOT NULL,
// -- 		dayLikeBlurb text(800),
// -- 		createdTimeStamp TIMESTAMP NOT NULL,
// --     PRIMARY KEY (id)