const Joi = require('joi');

// Post categories
const createOne = async (req, res) => {
    try {

    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Get a single categories
const getById = async (req, res) => {
    try {

    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Update categories
const updateOne = async (req, res) => {
    try {

    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Delete categories
const deleteOne = async (req, res) => {
    try {

    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Disable categories
const disableCategory = async (req, res) => {
    try {

    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

module.exports = { createOne, getAll, getById, updateOne, deleteOne, disableCategory };