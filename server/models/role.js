'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.hasMany(models.User, { foreignKey: 'role_id' });
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );

  // Synchronize the model with the database
  // Role.sync({ alter: true })
  //   .then(() => {
  //     console.log('Role model synchronized with the database.');
  //   })
  //   .catch((error) => {
  //     console.error('Error synchronizing Role model:', error);
  //   });

  return Role;
};
