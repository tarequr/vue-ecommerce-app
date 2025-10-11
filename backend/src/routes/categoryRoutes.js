const express = require('express');
const { allUsersController, singleUserController, deleteUserController } = require('../controllers/userController');
const router = express.Router();

router.get('/', allUsersController);
router.put('/:id', singleUserController);
router.delete('/:id', deleteUserController);

module.exports = router;
