const express = require('express');
const mongoose = require('mongoose');
const configdb = require('./config.json')
const app = express();
var path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const port = process.env.PORT || 3000;


//database
mongoose.connect(configdb.db, function (err, done) {
    console.log("db connecting...");
    if (err) {
        console.log("connection error" + err);

    } else {
        console.log("connected");
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
var data = [{
    id:"1",
    name: "dheeraj",
    description: "sfkadafjsdklskdns",
    year_active: "5"
}, {    
        id:"2",
        name: "dheeraj",
        description: "sfkadafjsdklskdns",
        year_active: "5"
    }]
app.get("/", function (req, res) {
    res.render('index',{Artists:data});
})

const track = require('./routes/track');
const album = require('./routes/album');
const artist = require('./routes/artist');
app.use('/artist',artist);
app.use('/album',album);
app.use('/track',track);

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`server is runnning on http://localhost:${port}`);
})
