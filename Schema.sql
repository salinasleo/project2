DROP DATABASE IF EXISTS mentorProgram;

CREATE DATABASE mentorProgram;

INSERT INTO `Mentors` (`id`,`firstName`,`lastName`,`email`,`zipCode`,`occupation1`,`occupation2`,`experienceBlurb`,`dayLikeBlurb`,`userType`,`createdAt`,`updatedAt`) 
VALUES (DEFAULT,'Nemo','Salinas','salinasleo@gmail.com','23229','Arts, Design, Entertainment,Sports,and Media','Building and Grounds Cleaning and Maintenance','hq','hqrh','Mentor','2018-08-27 23:17:37','2018-08-27 23:17:37');

USE mentorProgram;




-- CREATE TABLE userMentee
-- (
-- 	id int Not Null AUTO_INCREMENT UNIQUE,
-- 	menteeEmailAddress varchar(75) NOT NULL UNIQUE,
--     userType char(6) DEFAULT "Mentee",
--     menteeZip int(5)  NOT NULL,
--     menteeEmail varchar(60)  NOT NULL,
--     menteefFirstName varchar(30) NOT NULL,
--     menteeLastName varchar(30) NOT NULL,
--     occupationGroup1 varchar(60) NOT NULL,
--     occupationGroup2 varchar(60),
--     occupationGroup3 varchar(60),
--     menteeLinkedin_URL varchar(100),
--     menteePassword varchar (50) NOT NULL,
--     interestedInBlurb text(800) NOT NULL,
--     mostWantToAchieve varchar(150),
--     createdTimeStamp TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)
--     );
    
--     CREATE TABLE userMentor
--     (
-- 		id int Not Null AUTO_INCREMENT UNIQUE,
-- 		mentorEmailAddress varchar(75) NOT NULL UNIQUE,
-- 		userType  CHAR(6) DEFAULT "Mentor",
-- 		mentorZip int(5)  NOT NULL,
-- 		mentorEmail varchar(60)  NOT NULL,
-- 		mentorfFirstName varchar(30) NOT NULL,
-- 		mentorLastName varchar(30) NOT NULL,
-- 		occupationGroup1 varchar(60) NOT NULL,
-- 		occupationGroup2 varchar(60),
-- 		occupationGroup3 varchar(60),
--         mentorLinkedin_URL varchar(100),
-- 		mentorPassword varchar (50) NOT NULL,
-- 		experienceBlurb text(800) NOT NULL,
-- 		dayLikeBlurb text(800),
-- 		createdTimeStamp TIMESTAMP NOT NULL,
--     PRIMARY KEY (id)
--     );
    
--     CREATE TABLE interaction
--     (
-- 		id int NOT NULL AUTO_INCREMENT UNIQUE,
-- 		menteeEmailAddress varchar (30),
--         mentorEmailAddress varchar (30),
--         reachedOutTimestamp TIMESTAMP NOT NULL,
--         theMessage text(400),
--         senderPrimaryKey ENUM ('Mentor', 'Mentee'),
--         PRIMARY KEY(ID)
-- 	);
    
    
    