'use strict';
module.exports = (sequelize, DataTypes) => {
  const Picture = sequelize.define('Picture', {
    url: DataTypes.STRING,
    DestinationId: DataTypes.INTEGER
  }, {});
  Picture.associate = function(models) {
    // associations can be defined here
    Picture.belongsTo(models.Destination)
  };
  return Picture;
};