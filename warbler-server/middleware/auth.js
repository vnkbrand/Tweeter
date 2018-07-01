require("dotenv").load();
const jwt = require("jsonwebtoken");

//make sure the user is logged in
exports.loginRequired = function(req, res, next) {
    try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
        if(decoded){
            return next();
        } else {
            return next ({
                status: 401, //unauthorized
                message: "Please login first."
            });
        }
    });
    } catch (e) {
        return next({
            status: 401,
            message: "Please login first."
        });
    }
};
// /api/users/:id/messages
//make sure to get the correct user - Authorization
exports.ensureCorrectUser = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if(decoded && decoded.id === req.params.id) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Unauthorized"
                });
            }
        });
    } catch(e){
        return next({
            status: 401,
            message: "Unauthorized"
        });
    }
};
