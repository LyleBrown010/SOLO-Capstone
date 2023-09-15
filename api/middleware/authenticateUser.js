const {sign, verify} = require("jsonwebtoken"); 
require("dotenv").config();

function createToken(user){
    return sign({
        email: user.email,
        userPassword: user.userPassword, 
    }, 

    process.env.SECRET_KEY,

    {
        expiresIn: "1h", 
    }
    
    );
}

function verifyAToken(token){
    try{
        const decoded = verify(token, process.env.SECRET_KEY);
        return decoded;
    }
    catch(err){
        return null;
    }
}

module.exports = {createToken, verifyAToken};