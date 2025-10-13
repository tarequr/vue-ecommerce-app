const express = require('express');
const { allUsers, storeUser, singleUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.get('/', allUsers);
router.post('/:id', storeUser);
router.get('/:id', singleUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
