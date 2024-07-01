const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');
const portNumber = 3000;

// ROUTERS
//const userRouter = require('./routes/User');
//app.use('/user', userRouter);

db.sequelize.sync().then(() => {
  app.listen(portNumber, () => {
    console.log('Server running on port ' + portNumber);
  });
});
