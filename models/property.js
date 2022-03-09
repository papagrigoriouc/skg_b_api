const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const PropertySchema = new Schema({

    propertytitle:{
        type: String,
    },
    price:{
        type: String
    },
    description:{
        type: String
    },
    image:{
        type: String
    },
    coordinates:{
        type:[Number]
    },
    address:{
        type: String
    },
    city:{
        type: String
    }
});

module.exports = Properties = mongoose.model('properties', PropertySchema);