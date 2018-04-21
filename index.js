const express = require('express');
const mongoose = require('mongoose');
const configdb = require('./config.json')
const app = express();
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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.get("/", function (req, res) {
    res.send("Welcome to our new app ")
})



app.listen(port, function (err) {
    if (err) {
        console.log(err);

    }
    console.log(`server is runnning on http://localhost:${port}`);
})
