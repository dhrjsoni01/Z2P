const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const album = mongoose.Schema({

    artist_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref : 'artist'
    },
    name: {
            type: String,
            required: true,
         },
    release_date: {
            type : String,
            required: true,
    }
});

module.exports = mongoose.model('album', album);