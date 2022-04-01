const User = require('../models/user');



const handleLogout = async (req, res) => {
    // on client also delete the access token

    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(204); // no content

    
    const refreshToken = cookies.jwt;  

    //is refereshToken on db

    const foundUser = await User.findOne({refreshToken}).exec();

    if(!foundUser) {
        res.clearCookie('jwt',{httpOnly:true, sameSite: 'None'}); 
        return res.sendStatus(204) //Forbidden
    }
    //delete refreshtoken in db

    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);
    
    
     res.clearCookie('jwt',{httpOnly:true, sameSite: 'None'}); //secure:true - only serves on https
     res.sendStatus(204);
        
}

module.exports = {handleLogout}