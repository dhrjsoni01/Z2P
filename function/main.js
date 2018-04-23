'use strict';

const artist = require('../schema/artist');
const album = require('../schema/album');
const track = require('../schema/track');

exports.createArtist = (name, des, year_active) => {

    return new Promise((resolve, reject) => {
        const newArtist = new artist({
            name: name,
            description: des,
            year_active: year_active
        });
        newArtist.save()
            .then((Artist) => resolve({ status: 201,
                artist:Artist,
                 message: 'Artist created Sucessfully !' 
                }))
            .catch((err) => {
                if (err.code == 11000) {
                    reject({
                        status: 409, message: 'Artist Already Registered !' });
                } else {
                    reject({ status: 500, message: 'Internal Server Error !' + err });
                }
            });
    });
}

exports.updateArtist = (id, name, des, year_active) => {
    return new Promise((resolve, reject) => {
        artist.update({ _id: id }, {
            $set: {
                name: name,
                description: des,
                year_active: year_active
            }
        })
            .then(user => resolve({ status: 200, message: 'artist updated' }))
            .catch(err => {
                reject({ status: 500, message: 'Internal Server Error !' })
                console.log(err);
            })
    });
}

exports.getArtists= () =>{

    return new Promise((resolve, reject) => {
        artist.find({})
            .then(Artists => {
                if (Artists.length == 0) {

                    reject({ status: 404, message: 'No Artist Found' });
                } else {
                    resolve({ status: 200, artists:Artists });
                }
            })
            .catch(err => {
                reject({ status: 500, message: 'Internal Server Error !' })
            });
    });
}

exports.addAlbum = (artist_id,name,release_date)=>{
    return new Promise((resolve, reject) => {
        const newAlbum = new album({
            artist_id: artist_id,
            name: name,
            release_date: release_date
        });
        newAlbum.save()
            .then((Album) => resolve({
                status: 201,
                album: Album,
                message: 'Album created Sucessfully !'
            }))
            .catch((err) => {
                if (err.code == 11000) {
                    reject({
                        status: 409, message: 'Album Already Registered !'
                    });
                } else {
                    reject({ status: 500, message: 'Internal Server Error !' + err });
                }
            });
    });
}
exports.updateAlbum = (id, name, release_date) => {
    return new Promise((resolve, reject) => {
        album.update({ _id: id }, {
            $set: {
                name: name,
                release_date: release_date
            }
        })
            .then(user => resolve({ status: 200, message: 'album updated' }))
            .catch(err => {
                reject({ status: 500, message: 'Internal Server Error !' })
                console.log(err);
            })
    });
}
exports.getAlbums= (artist_id)=>{
    return new Promise((resolve, reject) => {
        album.find({artist_id:artist_id})
            .then(Albums => {
                if (Albums.length == 0) {
                    reject({ status: 404, message: 'No Artist Found' });
                } else {
                    resolve({ status: 200, albums: Albums });
                }
            })
            .catch(err => {
                reject({ status: 500, message: 'Internal Server Error !' })
            });
    });
}
exports.getTrack = (id) => {
    console.log(id);

    return new Promise((resolve, reject) => {
        track.find({album_id:id})
            .then(Tracks => {
                console.log(Tracks);
                if (Tracks.length == 0) {
                    reject({ status: 404, message: 'No Track Found' });
                } else {
                    resolve({ status: 200, tracks: Tracks });
                }
            })
            .catch(err => {
                reject({ status: 500, message: 'Internal Server Error !' })
            });
    });
}

exports.updateTrack = (id, name, play_time)=>{
    return new Promise((resolve, reject) => {
        track.update({ _id: id }, {
            $set: {
                name: name,
                play_time: play_time
            } 
        })
            .then(user => resolve({ status: 200, message: 'Track updated' }))
            .catch(err => {
                reject({ status: 500, message: 'Internal Server Error !' })
                console.log(err);
            })
    });
}

exports.addTrack = (album_id, name, play_time) => {
    return new Promise((resolve, reject) => {
        const newTrack = new track({
            album_id: album_id,
            name: name,
            play_time: play_time
        });
        newTrack.save()
            .then((Track) => resolve({
                status: 201,
                track: Track,
                message: 'track created Sucessfully !'
            }))
            .catch((err) => {
                if (err.code == 11000) {
                    reject({
                        status: 409, message: 'track Already Registered !'
                    });
                } else {
                    reject({ status: 500, message: 'Internal Server Error !' + err });
                }
            });
    });
}

