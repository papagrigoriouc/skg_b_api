const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({

    username: {
        type: String,  
        required: true     
    },
    avatar:{
        type: String
    },
    email: {
        type: String,
        required: true        
    },
    password: {
        type: String,
        required: true        
    },
    roles:{
        User:{
            type: Number,
            default: 2001
        },
        Admin: Number
    },
    refreshToken: String
    
});

module.exports = Users = mongoose.model('users', UserSchema);