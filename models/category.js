const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
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

const schemaCollection = mongoose.model("category", categorySchema);
module.exports = schemaCollection;