// Requiring the packages
const express =  require('express');
const router = express.Router();

// gets and displays a register page
router.get('/', (req, res) => {
    res.render('form');
})

// submits the reguster page information
router.post('/', async (req, res) => {
    const myData= new User(req.body)
    try{
        await myData.save()
        console.log("Item has been saved");
        const items = await User.find()
        res.render('list', {users:items})       
    } catch(err) {
        res.status(500).send("unable to save to database");
    }
})

 module.exports = router;