module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'categories',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('./index');

// const Category = sequelize.define(
//   'categories',
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     createdAt: 'created_at',
//     updatedAt: 'updated_at',
//   },
//   {
//     sequelize,
//     modelName: 'Category',
//   }
// );
// module.exports = Category;
