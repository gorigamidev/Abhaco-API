// Import the connection and the cookieSession, and bcrypt
const connection = require("../config/connection");
const cookieSession = require("./cookieSession");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const authUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection('users')
        .select('*')
        .where({ email: email })
        .then((data) => {
            if (data.length > 0) {
                bcrypt.compare(password, data[0].password, function (err, result) {
                    if (result) {
                        // Set the session data
                        req.session.user = data[0];
                        // Set a cookie with the session ID
                        res.cookie('sessionId', req.session.id, {
                            maxAge: 1800000, // 30 min
                            httpOnly: true,
                            secure: false // Set to true if using HTTPS
                        });
                        res.status(200).json(data[0]);
                    } else {
                        res.status(401).json({ error: 'Wrong Password' });
                    }
                });
            } else {
                res.status(401).json({ error: 'Wrong User' });
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//Function for the logout
const logout = (req, res) => {
    //Destroy the session
    req.session.destroy();
    //Clear the cookies
    res.clearCookie('connect.sid');
    //Return the message
    res.status(200).json({ message: "Sesión cerrada" });
};

//Export the authUser function
module.exports = {authUser, logout};