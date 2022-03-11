const express = require('express');
const router = express.Router();
const Property = require('../models/property');

router.get('/all', (req, res)=>{
    Property.find().then(properties => res.send(properties));
});

router.post('/create',(req, res)=>{
    
    const title = req.body.propertytitle;
    const price = req.body.price;
    const description = req.body.description;
    const image = req.body.image;
    const address = req.body.address;
    const city = req.body.city;
    const cords = [req.body.coordinates];
       
    console.log(title);
    // Property.create({
    //     title, price, description, image, address, city, cords
    // });
});



module.exports = router;