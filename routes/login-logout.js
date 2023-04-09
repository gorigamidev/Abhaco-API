const auth = require('../assets/auth');
const express = require('express');
const router = express.Router();

const loginUser = (req, res, serv) => {
    auth
        .authUser(req, res);
}

const logoutUser = (req, res) => {
    auth
        .logout(req, res);
}

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login Auth
 *     description: Method for authentication and login
 *     responses:
 *       200:
 *         description: A object of user loging with cookie session
 */
router.post('/login', loginUser);

/**
 * @swagger
 * /api/auth/login:
 *   get:
 *     summary: Logout Auth
 *     description: Method for Logout and finish session
 *     responses:
 *       200:
 *         description: Destroy cookie session and finish session
 */
router.get('/logout', logoutUser);

module.exports = router;