const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (request, response) => {
  const listOfUsers = await User.findAll();
  response.json(listOfUsers);
});

router.post('/', async (request, response) => {
  const post = request.body;
  await Post.create(user);
  response.json(user);
});

module.exports = router;
