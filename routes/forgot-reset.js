const express = require('express');
const router = express.Router();
const service = require('../models/resetPassMod');

//Forgot Password Request
const forgotPass = (req, res) => {
    service.forgotPassReq(req.body)
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

router.post('/forgot', forgotPass);
router.post('/reset', resetPassReq);

module.exports = router;