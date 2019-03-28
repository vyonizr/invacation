'use strict';
module.exports = (sequelize, DataTypes) => {
  const Destination = sequelize.define('Destination', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.STRING,
    price: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    long: DataTypes.FLOAT
  }, {});
  Destination.associate = function(models) {
    // associations can be defined here
    Destination.hasMany(models.Picture)
    Destination.belongsToMany(models.User, {through: models.UserDestination})
  };
  return Destination;
};