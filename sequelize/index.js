const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const db = require('./src/models/index');

const app = express();
// app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// ROUTERS
const roleRouter = require('./src/routes/role');
const userRouter = require('./src/routes/auths/user');

app.use('/roles', roleRouter);
app.use('/users', userRouter);

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
  });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
