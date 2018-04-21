const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const artist = mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    year_active: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('artist', artist);