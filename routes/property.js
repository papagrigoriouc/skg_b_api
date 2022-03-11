const express = require('express');
const router = express.Router();
const Property = require('../models/property');
const mongoose = require('mongoose');

//Read all properties

router.route('/all').get((req, res)=>{
    Property.find((error, data)=>{
        if (error){
            return next(error)
        }else {
            res.json(data)
        }
    });
});

//Cretae property

router.route('/create').post((req, res, next)=>{
    Property.create(req.body, (error, data)=>{
        if (error){
            return next(error);
        }else {
            console.log(data);
            res.json(data);
        }
    })
    
       
   
});



module.exports = router;