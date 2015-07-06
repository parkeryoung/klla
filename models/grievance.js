'use strict';
module.exports = function(sequelize, DataTypes) {
  var Grievance = sequelize.define('Grievance', {
    text: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Grievance;
};