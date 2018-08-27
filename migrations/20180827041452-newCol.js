module.exports = {
  up: function (queryInterface, Sequelize) {
    return [ queryInterface.addColumn(
              'Mentees',
              'milesMeet',
			   // or whatever data type this col needs
               Sequelize.STRING
             )];
  },
  down: function (queryInterface, Sequelize) {
        return [ queryInterface.removeColumn(
              'Mentees',
              'milesMeet',
			   // or whatever data type this col needs
               Sequelize.STRING
             )];
  }
};
