var express = require('express');
var router = express.Router();
const main = require('../function/main');

router.get('/', (req, res) => {
    main.getArtists()
        .then((result) => {
            res.status(result.status).json({ artists: result.artists });

        })
        .catch((err) => res.status(err.status).json({ message: err.message }));
});
router.post('/', (req, res) => {
    const des = req.body.des;
    const name = req.body.name;
    const year  = req.body.year;
    console.log(req.body);

    if (!year || !name || !des || !year.trim() || !name.trim() || !des.trim()) {
        console.log("invalid requestdue to insufficiant data in request");
        res.status(400).json({ message: 'Invalid Request !' });
    } else {
        main.createArtist( name,des,year)
            .then((result) => {
                res.status(result.status).json({ message: result.message })
            })
            .catch((err) => res.status(err.status).json({ message: err.message }));
    }
});
router.put('/:id', (req, res) => {
    const des = req.body.des;
    const name = req.body.name;
    const year = req.body.year;
    console.log(req.body);

    if (!year || !name || !des || !year.trim() || !name.trim() || !des.trim()) {
        console.log("invalid requestdue to insufficiant data in request");
        res.status(400).json({ message: 'Invalid Request !' });
    }
    else{
        main.updateArtist(req.params.id,name,des,year)
            .then((result) => {
                res.status(result.status).json({ message: result.message })
            })
            .catch((err) => res.status(err.status).json({ message: err.message }));
    }
});
module.exports = router;