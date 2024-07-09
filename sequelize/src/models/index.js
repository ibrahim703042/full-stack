// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('sequelize_db_tutorials', 'root', '', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to connect to the database:', error);
//   });
// module.exports = sequelize;

const { Sequelize, DataTypes, Model } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');

const sequelize = new Sequelize('sequelize_db_tutorials', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = require('./role')(sequelize, DataTypes);
db.user = require('./user')(sequelize, DataTypes);
db.category = require('./category')(sequelize, DataTypes);
db.product = require('./product')(sequelize, DataTypes);

db.role.hasMany(db.user, { foreignKey: 'role_id' });
db.user.belongsTo(db.role, { foreignKey: 'role_id' });

db.category.hasMany(db.product, { foreignKey: 'category_id' });
db.product.belongsTo(db.category, { foreignKey: 'category_id' });

module.exports = db;
