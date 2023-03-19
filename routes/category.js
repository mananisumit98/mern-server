const { Router } = require('express');
const router = Router();

const { createOne,
    getAll,
    getById,
    updateOne,
    deleteOne,
    disableCategory
} = require('../controllers/category');

const {
    createOneValidation,
    getByIdValidation,
    updateOneValidation,
    deleteOneValidation,
    disableValidation,
} = require('../validators/category');

// Get all categories
router.get('/', getAll);

// Post categories
router.post('/', [createOneValidation], createOne);

// Get a single categories
router.get('/:id', [getByIdValidation], getById);

// Update categories
router.patch('/:id', [updateOneValidation], updateOne);

// Delete categories
router.delete('/:id', [deleteOneValidation], deleteOne);

// Disable categories
router.patch('/disable/:id', [disableValidation], disableCategory);


module.exports = router;