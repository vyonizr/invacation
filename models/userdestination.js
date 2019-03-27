'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserDestination = sequelize.define('UserDestination', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    UserId: DataTypes.INTEGER,
    DestinationId: DataTypes.INTEGER,
  }, {});
  UserDestination.associate = function(models) {
    // associations can be defined here
    UserDestination.belongsTo(models.User)
    UserDestination.belongsTo(models.Destination)
  };
  return UserDestination;
};