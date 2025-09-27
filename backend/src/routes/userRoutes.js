const express = require('express');
const { allUsersController } = require('../controllers/userController');
const router = express.Router();

router.get('/show', allUsersController);

module.exports = router;
