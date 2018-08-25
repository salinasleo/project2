module.exports = function(sequelize, DataTypes) {
    var Mentee = sequelize.define("Mentee", {
    
     firstName: DataTypes.STRING,
     lastName: DataTypes.STRING,
     email: DataTypes.STRING,
     zipCode:  DataTypes.STRING,
     occupation1: DataTypes.STRING,
     occupation2: DataTypes.STRING,
     occupation3: DataTypes.STRING,
     objectives: DataTypes.STRING,
     userType: DataTypes.STRING,
    });
    
    return Mentee;
    };