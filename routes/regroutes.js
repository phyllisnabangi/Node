// Requiring the packages
const express =  require('express');
const router = express.Router();
const User = require('../model/regModel')
const multer = require('multer')

const upload = multer({ storage: storage })

/* Register Page */
// gets and displays a register page
router.get('/', (req, res) => {
    res.render('form');
})

// submits the reguster page information
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


/* Upload Page */
// router.get('/', (req, res)=> {
//     res.render('uploads')
// });

// router.post('/', upload.single('imageupload'),function(req, res) {
//     res.send("File upload sucessfully.");
//   });


 module.exports = router;