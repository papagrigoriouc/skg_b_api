const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const property = require('./routes/property');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.use('/api/property', property);

//Db config
const con = mongoose.connect("mongodb://5.189.177.98:37017/realestate", {useNewUrlParser: true});

app.listen(5000);
