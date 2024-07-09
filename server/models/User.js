'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsTo(models.Role, { foreignKey: 'role_id' });
    }
  }
  User.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthDay: DataTypes.DATEONLY,
      // gender: DataTypes.ENUM('Male', 'Female'),
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  // Synchronize the model with the database
  // User.sync({ alter: true })
  //   .then(() => {
  //     console.log('User model synchronized with the database.');
  //   })
  //   .catch((error) => {
  //     console.error('Error synchronizing Role model:', error);
  //   });

  return User;
};
