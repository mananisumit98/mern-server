const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        username: {
            type: String,
            required: true
        },
        email_id: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        userType: {
            type: Number,
            enum: [1, 2, 3],
            default: 2 // 1: Admin, 2: Seller, 3: Buyer
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

const schemaCollection = mongoose.model("user", userSchema);
module.exports = schemaCollection;