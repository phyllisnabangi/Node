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
        res.redirect('/login')  
        // const items = await User.find()
        // res.render('loginForm', {users:items})       
    } catch(err) {
        res.status(500).send("unable to save to database");
    }
})

// returns a specific page
router.get('/list', async(req,res)=>{
    // checking the session of the particular user is on
    if(req.session.user){
        try{
            const items = await User.find() 
            res.render('list', {users:items, currentUser: req.session.user}) 
            
        } catch (err) {
            res.status(500).send("unable to save to database");
        }
    } else {
        res.redirect('/login')
    }
})


 module.exports = router;