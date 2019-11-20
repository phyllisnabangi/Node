// Requiring the packages
const express =  require('express');
const router = express.Router();
const User = require('../model/regModel')
const multer = require('multer')


/* Register Page */
// gets and displays a register page
router.get('/', (req, res) => {
    res.render('form');
})

// submits the register page information
router.post('/', async (req, res) => {
    const user= new User(req.body)
    try{
        await user.save()
        console.log("Item has been saved");
        const items = await User.find()
        res.render('list', {users:items})       
    } catch(err) {
        res.status(500).send("unable to save to database");
    }
})

 module.exports = router;