const express = require('express');
const router = express.Router();
const Property = require('../models/property');

router.get('/all', (req, res)=>{
    Property.find().then(properties => res.send(properties));
})



module.exports = router;