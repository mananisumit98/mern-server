const Joi = require('joi');

// Post categories
const createOneValidation = async (req, res, next) => {
    try {
        const Schema = Joi.object({
            name: Joi.string().required(),
        });

        const { error } = Schema.validate(req.body);

        if (error) {
            return res.json({ error });
        }

        next();

    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Get a single categories
const getByIdValidation = async (req, res, next) => {
    try {
        const Schema = Joi.object({
            id: Joi.string().required(),
        });

        const { error } = Schema.validate(req.params);

        if (error) {
            return res.json({ error });
        }

        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Update categories
const updateOneValidation = async (req, res, next) => {
    try {
        const Schema = Joi.object({
            id: Joi.string().required(),
        });

        const { error } = Schema.validate(req.params);

        if (error) {
            return res.json({ error });
        }
        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Delete categories
const deleteOneValidation = async (req, res, next) => {
    try {
        const Schema = Joi.object({
            id: Joi.string().required(),
        });

        const { error } = Schema.validate(req.params);

        if (error) {
            return res.json({ error });
        }
        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

// Disable categories
const disableValidation = async (req, res, next) => {
    try {

        const { status } = req.body;
        const { id } = req.params;

        const Schema = Joi.object({
            id: Joi.string().required(),
            status: Joi.boolean()
        });

        const { error } = Schema.validate({ id, status });

        if (error) {
            return res.json({ error });
        }

        next();
    } catch (error) {
        return res.json({ message: "Catch Error", status: "Fail", error: error.message });
    }
};

module.exports = {
    createOneValidation
    , getByIdValidation, updateOneValidation, deleteOneValidation, disableValidation
};