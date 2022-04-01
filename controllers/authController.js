const User = require('../models/user');
const bcrypt  =require('bcrypt');

const handleLogin = async (req, res) => {

    const {user, pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'Username and password are required'});

    const foundUser = await User.findOne({username: user}).exec();

    if(!foundUser) return res.sendStatus(401) //Unauthorized

    //evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if(match) {
        //create JWTs 


        res.json({'success':`User ${user} is logged in!`});

    } else {
        res.sendStatus(401);
    }

    
}

module.exports = {handleLogin};