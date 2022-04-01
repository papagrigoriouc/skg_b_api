const User = require('../models/user');
const bcrypt  =require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();



const handleLogin = async (req, res) => {

    const {user, pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({'message': 'Username and password are required'});

    const foundUser = await User.findOne({username: user}).exec();

    if(!foundUser) return res.sendStatus(401) //Unauthorized

    //evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if(match) {
        //create JWTs 
        const accessToken = jwt.sign(
            { "username": foundUser.usernmame},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'30s'}
            );
        const refreshToken = jwt.sign(
            { "username": foundUser.usernmame},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn:'1d'}
            );

        //saving refresh token with current user
        foundUser.refreshToken= refreshToken;
        const result = await foundUser.save();
        console.log(result);
        //
        res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({accessToken});

    } else {
        res.sendStatus(401);
    }

    
}

module.exports = {handleLogin}