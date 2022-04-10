const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema

const PropertySchema = new Schema({

    category:{
        type: String
    },
    for:{
        type: String
    },
    price:{
        type: Number
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
    },
    area:{
        type: Number
    }
});

module.exports = Properties = mongoose.model('properties', PropertySchema);