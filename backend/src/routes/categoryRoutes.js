const express = require('express');
const { allCategories, storeCategory, singleCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.get('/', allCategories);
router.post('/:id', storeCategory);
router.get('/:id', singleCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
