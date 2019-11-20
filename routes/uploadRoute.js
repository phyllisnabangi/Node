// Requiring the packages
const express =  require('express');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');

const multer = require('multer');
// const fs = require('fs');

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
    storage: storage,
    limits:{fileSize: 10000000}
})

// Upload Image
router.get('/', (req, res)=> {
    res.render('uploads')
});

router.post('/', upload.single('myImage'),function(req, res, next) {
    const file = req.file //fetches the file
    if (!file){
        const error = new Error("Please upload File")
        console.log(file);
        error.httpStatusCode = 400;
        return next(error);    
    }
    res.render('uploads', {image: req.file.originalname})
});

// configuring image upload to the database
router.post("/", upload.single('myFile'),(req,res) => {
    var img = fs.readFileSync(req.file.path)
    var encode_image = img.toString('base64')

    // Defining a JSON Object for the image
var finalImg = {
  contentType:req.file.mimetype,
  path: req.file.path,
  image: new Buffer(encode_image,'base64')
};  

// Insert the image to the database
db.collection('image').insertOne(finalImg,(err,result) => {
  console.log(result);
  if(err) return console.log(err);

  console.log("Saved to database")
  res.contentType(finalImg.contentType)
  res.send(finalImg.image)

})
})




module.exports = router;