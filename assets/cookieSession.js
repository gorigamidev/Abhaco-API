//Import cookieParser, express-session and connection from the config folder
const cookieParser = require('cookie-parser');
const session = require('express-session');

//Import the secret from the .env file
const secret = process.env.SECRET_KEY;

const cookieSession = (serv) => {
    //Use cookieParser and express-session
    serv.use(cookieParser());
    serv.use(session({
        //Set the secret to the secret variable
        secret: secret,
        //Set the resave to false
        resave: false,
        //Set the saveUninitialized to false
        saveUninitialized: false,
        //Set the cookie to secure to false
        cookie: {
            maxAge: 1800000, //30 min
            secure: false
        },
        //Set the store to the connection
        //store: connection
        //Set the unset to destroy
        unset: 'destroy'
    }));
}

//Export the cookieSession function
module.exports = cookieSession;