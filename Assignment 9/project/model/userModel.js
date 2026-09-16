const mongoose = require('mongoose');
const userSchema = require('../schema/userSchema.js'); 

const User = mongoose.model('User', userSchema);

module.exports = User;
 