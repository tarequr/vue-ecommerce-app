const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required.'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'The email field is required.'],
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'The password field is required.']
    },
    phone: {
        type: String,
        required: [true, 'The phone field is required']
    },
    address: {
        type: String,
        required: [true, 'The address field is required.'],
        minlength: [3, 'The address must be at least 3 characters long.'],
    },    
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);