const express = require('express');
const router = express.Router();
const service = require('../models/resetPassMod');

//Forgot Password Request
const forgotPass = (req, res) => {
    service.forgotPassReq(req)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

//Reset Password
const resetPassReq = (req, res) => {
    service.resetPass(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
};

/**
 * @swagger
 * /api/service/forgot:
 *   post:
 *     summary: Forgot Password Request
 *     description: Method for request forgot password
 *     responses:
 *       200:
 *         description: An object of user forgot password request
 */
router.post('/forgot', forgotPass);

/**
 * @swagger
 * /api/service/reset:
 *   post:
 *     summary: Reset Password Request
 *     description: Method for request reset password
 *     responses:
 *       200:
 *         description: A object of user reset password request
 */
router.post('/reset', resetPassReq);

module.exports = router;