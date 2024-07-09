module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Products',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supply: {
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
      modelName: 'Product',
    }
  );
  return Product;
};

// const { DataTypes, Model } = require('sequelize');
// const sequelize = require('./index');

// const Product = sequelize.define(
//   'Products',
//   {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     image: {
//       type: DataTypes.STRING,
//     },
//     price: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//     },
//     rating: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     supply: {
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
//     modelName: 'Product',
//   }
// );

// module.exports = Product;
