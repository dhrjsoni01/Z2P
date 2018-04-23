var express = require('express');
var router = express.Router();
const main = require('../function/main');

router.get('/:id', (req, res) => {
        main.getTrack(req.params.id)
                .then((result) => {
                        res.status(result.status).json({ tracks: result.tracks });
                })
                .catch((err) => res.status(err.status).json({ message: err.message }));
});
router.post('/', (req, res) => {

        const id = req.body.id;
        const name = req.body.name;
        const time = req.body.time;

        if (!id || !name || !time) {
                console.log("invalid requestdue to insufficiant data in request");
                res.status(400).json({ message: 'Invalid Request !' });
        } else {
                main.addAlbum(id, name, time)
                        .then((result) => {
                                res.status(result.status).json({ message: result.message })
                        })
                        .catch((err) => res.status(err.status).json({ message: err.message }));
        }
});
router.put('/:id', (req, res) => {

});
module.exports = router;