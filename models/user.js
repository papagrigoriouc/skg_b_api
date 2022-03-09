const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const UserSchema = new Schema({

    name: {
        type: String       
    },
    email: {
        type: String        
    },
    password: {
        type: String        
    }
    
});

module.exports = Users = mongoose.model('users', UserSchema);