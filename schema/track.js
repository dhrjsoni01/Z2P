const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const track = mongoose.Schema({

    album_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'album',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    play_time: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('track', track);