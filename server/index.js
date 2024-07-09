const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');
const portNumber = 3000;

// ROUTES
const roleRoutes = require('./routes/role');
// const UserRoutes = require('./routes/User');
const clientRoutes = require('./routes/client');
//const generalRoutes = require('./routes/general');
//const managementRoutes = require('./routes/managment');
//const salesRoutes = require('./routes/sales');

app.use('/roles', roleRoutes);
// app.use('/user', UserRoutes);
app.use('/clients', clientRoutes);
//app.use('/general', generalRoutes);
//app.use('/management', managementRoutes);
//app.use('/sales', salesRoutes);

const PORT = process.env.PORT || 3000;

// const runServer = async () => {
//   try {
//     await db.sequelize.sync({ alter: true });
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };
// runServer();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
