const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/its-backgroud-job-1';
mongoose.Promise('bluebird');
mongoose.connect(url, (err)=>{
    if(err) console.log(err);
    console.log('you are conected on url: ', url);
})

var task = require('./routes/task');

var app = express()

//cors and body-parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/task', task);

app.listen(3000, ()=>{
    console.log('connection on port: 3000')
});

module.exports = app;