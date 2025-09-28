const express = require('express');
const { allUsersController } = require('../controllers/userController');
const router = express.Router();

router.get('/', allUsersController);
router.get('/show', singleUsersController);

module.exports = router;
