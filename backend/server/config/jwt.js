const jwt = require("jsonwebtoken");
const secret = process.env.MY_SECRET_KEY;

module.exports.authenticate = (req, res, next) => {
    console.log(`Auth Hit`)
    console.log(req)
    if(!req.cookies){
        console.log('NO JWT TO VERIFY')
        next()
    }else{
        jwt.verify(req.cookies.usertoken, secret, {}, (err, payload) => {
            if (err) {
                res.status(401).json({ message: 'FAILED TO VERIFY', verified: false });
                console.log(err)
            } else {
            next();
            }
        });
    }
};
