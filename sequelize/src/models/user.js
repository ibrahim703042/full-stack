module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
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
      // phone: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
      // gender: {
      //   type: DataTypes.ENUM('Male', 'Female'),
      //   allowNull: false,
      // },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return User;
};

// const { DataTypes } = require('sequelize');
// const sequelize = require('./index');

// const User = sequelize.define(
//   'Users',
//   {
//     fname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lname: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     city: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     state: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     country: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phone: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gender: {
//       type: DataTypes.ENUM('Male', 'Female'),
//       allowNull: false,
//     },
//   },
//   {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at',
//   }
// );

// module.exports = User;
