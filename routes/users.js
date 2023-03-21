const { Router } = require('express');
const router = Router();

const { createOneValidation, loginValidation, getByIdValidation, updateOneValidation, deleteOneValidation } = require('../validators/users');

const { createOne, login, getAll, getById, updateOne, deleteOne } = require('../controllers/users');

// User Login
router.post('/login', [loginValidation], login);

// Get All Users
router.get('/', getAll);

// New user Registration
router.post('/', [createOneValidation], createOne);

// Get User By Id
router.get('/:id', [getByIdValidation], getById);

// Update existing user with ID
router.patch('/:id', [updateOneValidation], updateOne);

// Delete existing user By ID
router.delete('/:id', [deleteOneValidation], deleteOne);

module.exports = router;