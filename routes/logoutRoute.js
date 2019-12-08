// Requiring the packages
const express =  require('express');
const router = express.Router();
const User = require('../model/regModel')

// logout
router.post('/', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                // failed to destroy session
            } else {
                return res.redirect('/login');
            }
        })
    }
})

module.exports = router;  