// Requiring the packages
const express =  require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../model/regModel')
const multer = require('multer');

// Set Storage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})

// Init Upload
const upload = multer({ 
    storage: storage 
})

// Upload Image
router.get('/', (req, res)=> {
    res.render('uploads')
});

router.post('/', upload.single('imageupload'),function(req, res) {
    // var imagePath=req.file.path
    res.send('uploaded');
});


module.exports = router;