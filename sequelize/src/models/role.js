module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Roles',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return Role;
};

// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const Role = sequelize.define(
//   'Roles',
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at',
//   }
// );

// module.exports = Role;
