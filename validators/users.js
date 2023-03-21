const Joi = require('joi');

// New User Registration
const createOneValidation = async (req, res, next) => {
    try {
        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// User Login
const loginValidation = async (req, res, next) => {
    try {
        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Get User By Id
const getByIdValidation = async (req, res, next) => {
    try {
        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Update existing user with ID
const updateOneValidation = async (req, res, next) => {
    try {
        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Delete existing user By ID
const deleteOneValidation = async (req, res, next) => {
    try {
        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

module.exports = { createOneValidation, loginValidation, getByIdValidation, updateOneValidation, deleteOneValidation };