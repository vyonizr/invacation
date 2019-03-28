'use strict';
const bcrypt = require("bcryptjs")

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "First name must not be empty"
        },
        isAlpha: {
          args: true,
          msg: "First name: only letters allowed"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        isEmpty(lastName) {
          if (lastName.length !== 0 && RegExp(' ').test(lastName)) {
            throw new Error('Last name: only letters allowed')
          }
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        isUnique(username) {
          return User.findOne({
            where: {
              username
            }
          })
          .then(foundUser => {
            if (foundUser) {
              throw new Error("username has been taken")
            }
          })
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "E-mail must be in a valid format"
        },
        isUnique(email) {
          return User.findOne({
            where: {
              email
            }
          })
          .then(foundUser => {
            if (foundUser) {
              throw new Error("email has been taken")
            }
          })
        }
      }
    },
    password: DataTypes.STRING,
    balance: DataTypes.INTEGER,
    salt: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user, options) {
        let temp = user.firstName;
        temp = temp[0].toUpperCase() + temp.slice(1).toLowerCase()
        user.firstName = temp;
        
        temp = user.lastName;
        temp = temp[0].toUpperCase() + temp.slice(1).toLowerCase()
        user.lastName = temp;

        if (user.password !== "") {
          let salt = bcrypt.genSaltSync(10);
          let hash = bcrypt.hashSync(user.password, salt);
          user.password = hash
          user.salt = salt
          user.balance = 0
        }
      },
      beforeUpdate(user, options) {
        let temp = user.firstName;
        temp = temp[0].toUpperCase() + temp.slice(1).toLowerCase()
        user.firstName = temp;
        
        if (user.lastName !== '') {
          temp = user.lastName;
          temp = temp[0].toUpperCase() + temp.slice(1).toLowerCase()
          user.lastName = temp;
        }
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Destination, {through: models.UserDestination})
  };

  User.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName
  }

  // User.prototype.capitalizeUsername = function() {
  //   return this.username.toUpperCase()
  // }

  return User;
};