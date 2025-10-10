const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required.'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'The slug field is required.'],
        trim: true,
        unique: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);
