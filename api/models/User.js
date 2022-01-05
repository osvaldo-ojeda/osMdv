const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {}

User.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    email: {
      type: Sequelize.STRING,
      isEmail: true,
      allowNull: false
    },
    pass: {
      type: Sequelize.STRING,
      allowNull: false
    },
    salt: {
      type: Sequelize.STRING
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);
User.prototype.hash=(pass,salt)=>{
  return bcrypt.hash(pass,salt);
}


User.beforeCreate((user)=>{
  return bcrypt
  .genSalt(10)
  .then((salt)=>{
    user.salt=salt;
    return user.hash(user.pass, salt);
  })
  .then((hash)=>{
    user.pass=hash;
  })
})




module.exports = User;

