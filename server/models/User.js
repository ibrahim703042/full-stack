//const { Sequelize, DataTypes } = require('sequelize');
//const sequelize = new Sequelize('mysql::memory:');

module.exports = (Sequelize, DataTypes) => {
  const Post = Sequelize.define('User', {
    // Model attributes are defined here
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Post;
};
