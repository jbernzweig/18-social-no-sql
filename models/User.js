const { Schema, model } = require('mongoose');
const tbdSchema = require('./tbd')

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 50,
        },
        email: {
            type: String,
            required: true,
            max_length: 50,
        },
        thoughts: {
            // Array of _id values referencing the Thought model
        },
        friends: {
            // Array of _id values referencing the User model (self reference)
        }
    }
)

