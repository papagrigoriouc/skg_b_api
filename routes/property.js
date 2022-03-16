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

//Create property

router.route('/create').post((req, res, next)=>{
    Property.create(req.body, (error, data)=>{
        if (error){
            return next(error);
        }else {
            console.log(data);
            res.json(data);
        }
    })

// Delete property

router.route('/delete/:id').delete((req, res, next)=>{
    Property.findByIdAndRemove(req.params.id, (error, data)=>{
        
        if (error) {
            
            return next(error);
            
        } else {
            
            res.status(200).json({
                msg:data                 
            })            
        }       
    })
})

router.route('/one/:id').get((req, res)=>{
    Property.findById(req.params.id, (error, data)=>{
        if (error){
            return next(error)
        }else {
            res.json(data)
        }
    });
})
   
});



module.exports = router;