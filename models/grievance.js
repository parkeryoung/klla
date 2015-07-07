'use strict';
module.exports = function(sequelize, DataTypes) {
  var Grievance = sequelize.define('Grievance', {
    id: { type: DataTypes.STRING, primaryKey: true},
    text: DataTypes.TEXT,
    up: DataTypes.INTEGER,
    down: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    instanceMethods: {
      total: function() {
        return (this.up - this.down)
      }
    }
  });
  return Grievance;
};
