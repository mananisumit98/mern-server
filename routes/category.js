const { Router } = require('express');
const router = Router();

const { createOne,
    getAll,
    getById,
    updateOne,
    deleteOne,
    disableCategory
} = require('../controllers/category');

// Get all categories
router.get('/', getAll);

// Post categories
router.post('/', createOne);

// Get a single categories
router.get('/:id', getById);

// Update categories
router.patch('/:id', updateOne);

// Delete categories
router.delete('/:id', deleteOne);

// Disable categories
router.patch('/disable/:id', disableCategory);


module.exports = router;