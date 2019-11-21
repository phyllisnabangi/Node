// Requiring the packages
const express =  require('express');
const router = express.Router();
const User = require('../model/regModel')
const multer = require('multer')


/* Login Page */
// gets and displays a register page
router.get('/', (req, res) => {
    res.render('loginForm');
})

// submits a login page information
router.post('/', async(req, res) => {
    try{
        const user = await User.authenticate(req.body.username, req.body.password);
        res.send("hey " + user.firstname + " " + user.lastname)
    }catch{
        res.send("Login Failed")
        // res.redirect('register')
    }
})

 module.exports = router;