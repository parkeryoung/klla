'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'Grievances',
      'up',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    )

    queryInterface.addColumn(
      'Grievances',
      'down',
      {
        type: Sequelize.INTEGER,
        defaultValue: 0
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn(
      'Grievances',
      'up'
    )

    queryInterface.removeColumn(
      'Grievances',
      'down'
    )
  }
};
