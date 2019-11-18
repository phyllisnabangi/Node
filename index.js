// Requiring the packages
const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
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

// Init app 
const app = express();

// middleware
app.use(bodyParser.urlencoded({extended: true}));
// setting the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// setting the static folder
app.use(express.static('./public'));

//Importing the Routes
const regRoute = require('./routes/regroutes')
app.use('/reg', regRoute);
// app.use('/upload', regRoute);

/* Upload Page */
app.get('/upload', (req, res)=> {
    res.render('uploads')
});

app.post('/upload', upload.single('imageupload'),function(req, res) {
    res.send("File upload sucessfully.");
  });

// Configuring mongodb
// const MongoClient = mongodb.

// mongoose db connection
mongoose.connect("mongodb://localhost:27017/node-demo");



//  Listening for requests: the server
app.listen(3000, ()=>{
    console.log("listening on 3000");
    
})












