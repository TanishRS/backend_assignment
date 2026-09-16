const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    course: {
        type: String,
        required: false
    }
}, { 
    timestamps: true,
    collection: 'users'
});

module.exports = userSchema;
