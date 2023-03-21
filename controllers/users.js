require("dotenv").config();
const Users = require('../models/users');
const bycrypt = require('bcryptjs');
const { EXCPETION, USER_REGISTRATION, CATCH_ERROR, STATUS_FAIL, STATUS_SUCCESS, USER_LIST, USERNAME_EXISTS, EMAIL_EXISTS, LOGIN_SUCCESSFUL, INVALID_USER_EMAIL, INVALID_PASSWORD } = require('../utils/messages');
const jwt = require('jsonwebtoken');

// New User Registration
const createOne = async (req, res) => {
    try {
        let { username, email_id, password } = req.body;

        password = await bycrypt.hash(password, 10)

        const checkUserName = await Users.findOne({ username: username });
        const checkEmail_id = await Users.findOne({ email_id: email_id });

        if (checkUserName) {
            return res.json({ message: USERNAME_EXISTS, status: STATUS_FAIL, response: {} });
        }

        if (checkEmail_id) {
            return res.json({ message: EMAIL_EXISTS, status: STATUS_FAIL, response: {} });
        }

        const insertElement = await Users.create({
            username, email_id, password
        });

        if (!insertElement) {
            return res.json({ message: EXCPETION, status: STATUS_FAIL, response: insertElement });
        }

        return res.json({ message: USER_REGISTRATION, status: STATUS_SUCCESS, response: insertElement });
    } catch (error) {
        return res.json({ message: CATCH_ERROR, status: STATUS_FAIL, error: error.message });
    }
};

// User Login
const login = async (req, res) => {
    try {
        let { email_id, password } = req.body;

        let responseObj = {};

        let getUser = await Users.findOne({ $or: [{ username: email_id }, { email_id: email_id }] });

        if (!getUser) {
            return res.json({ message: INVALID_USER_EMAIL, status: STATUS_FAIL, response: {} });
        }

        let comparePassword = await bycrypt.compare(password, getUser.password)

        if (!comparePassword) {
            return res.json({ message: INVALID_PASSWORD, status: STATUS_FAIL, response: false });
        }

        const token = await jwt.sign(
            getUser._id.toString(),
            process.env.JWT_SECRETKEY
        );

        responseObj = getUser.toJSON();
        responseObj.auth_token = token;

        return res.json({ message: LOGIN_SUCCESSFUL, status: STATUS_SUCCESS, response: responseObj });

    } catch (error) {
        return res.json({ message: CATCH_ERROR, status: STATUS_FAIL, error: error.message });
    }
};

// Get All User
const getAll = async (req, res) => {
    try {

        const fetchElement = await Users.find({});

        if (!fetchElement) {
            return res.json({ message: EXCPETION, status: STATUS_FAIL, response: insertElement });
        }

        return res.json({ message: USER_LIST, status: STATUS_SUCCESS, response: fetchElement });

    } catch (error) {
        return res.json({ message: CATCH_ERROR, status: STATUS_FAIL, error: error.message });
    }
};

// Get User By Id
const getById = async (req, res) => {
    try {

        const { id } = req.params;

        const fetchElementById = await Users.findOne({ _id: id });

        if (!fetchElementById) {
            return res.json({ message: EXCPETION, status: STATUS_FAIL, response: insertElement });
        }

        return res.json({ message: USER_LIST, status: STATUS_SUCCESS, response: fetchElementById });

    } catch (error) {
        return res.json({ message: CATCH_ERROR, status: STATUS_FAIL, error: error.message });
    }
};

// Update existing user with ID
const updateOne = async (req, res) => {
    try {
    } catch (error) {
        return res.json({ message: CATCH_ERROR, status: STATUS_FAIL, error: error.message });
    }
};

// Delete existing user By ID
const deleteOne = async (req, res) => {
    try {
    } catch (error) {
        return res.json({ message: CATCH_ERROR, status: STATUS_FAIL, error: error.message });
    }
};

module.exports = { createOne, login, getById, getAll, updateOne, deleteOne };