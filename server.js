const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const property = require('./routes/property');
const register = require('./routes/register');
const auth = require('./routes/auth');
const refresh = require('./routes/refresh');
const logout = require('./routes/logout');
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cookieParser());

// Routes
app.use('/register', register);
app.use('/auth', auth );
app.use('/refresh', refresh);
app.use('/logout', logout);
app.use('/api/property', property);




//Db config
const con = mongoose.connect("mongodb://5.189.177.98:37017/realestate", {useNewUrlParser: true})
.then(()=>{
    console.log('Database succesfully connected!')
},
error =>{
    console.log('Could not connect to database: ' + error)
});

//Ports
const port = 5000;
const server = app.listen(port, ()=>{
    console.log('Connected to port ' + port);
});

//404 error
app.use ((req, res, next)=> {
    next(createError(404));
});

app.use(function (err, req, res, next){
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});