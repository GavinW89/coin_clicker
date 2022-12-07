const User = require("../models/user.model");
const jwt = require("jsonwebtoken")
const secret = process.env.MY_SECRET_KEY;

class UserController{
    getUserByJWT(req,res){
        if(req.cookies.usertoken){
            const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true});
            User.findById(decodedJWT.payload._id)
                .then(user => {res.json({results: user})})
                .catch(err => res.json({err}))
        }else{
            console.log(`No JWT found`)
            User.create(req.body)
                .then(user => {
                    const userToken = jwt.sign({_id: user._id}, secret)
                    res.cookie("usertoken", userToken, secret, {httpOnly: true}).json({ msg: "SUCCESS!", results: user})
                    console.log("Created New")})
                .catch(err => res.json(err))
        }
    }
    
    setCoins(req,res){
        const decodedJWT = jwt.decode(req.cookies.usertoken, {complete:true})
        User.findByIdAndUpdate({_id: decodedJWT.payload._id},{coins: req.body.coins}) 
            .then(user => {res.json(user), console.log(user)})
            .catch(err => res.json(err))
    }


}

module.exports = new UserController();