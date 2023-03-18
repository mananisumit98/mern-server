const Category = require('../models/category');

// Post categories
const createOne = async (req, res) => {
    try {
        const { name } = req.body;
        const responseObj = await Category.create({ name });

        return res.json({ message: "Category added Successfully", status: "Success", response: responseObj });
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Get all categories
const getAll = async (req, res) => {
    try {
        const responseObj = await Category.find({});

        return res.json({ message: "Category List", status: "Success", response: responseObj });
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Get a single categories
const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const responseObj = await Category.find({ _id: id });

        return res.json({ message: "Category Item", status: "Success", response: responseObj });
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Update categories
const updateOne = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;

        const responseObj = await Category.updateOne({ _id: id }, { name: name }, { new: true });

        return res.json({ message: "Category Item", status: "Success", response: responseObj });
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Delete categories
const deleteOne = async (req, res) => {
    try {
        const { id } = req.params;

        const findCategory = await Category.findOne({ _id: id });

        if (findCategory == null || Object.keys(findCategory).length < 1) {
            return res.json({ message: "Category Not Found >>", status: "Success", response: {} });
        }

        const responseObj = await Category.deleteOne({ _id: id });
        return res.json({ message: "Category Deleted Successfully >>", status: "Success", response: responseObj });
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Disable categories
const disableCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const responseObj = await Category.updateOne({ _id: id }, { status: status }, { new: true });

        return res.json({ message: "Category Disabled", status: "Success", response: responseObj });
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

module.exports = { createOne, getAll, getById, updateOne, deleteOne, disableCategory };