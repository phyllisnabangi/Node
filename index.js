// Requiring the packages
const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const multer = require('multer');
const session = require('express-session')
// const fs= require('fs');// requring the file system



// Init app 
const app = express();

// middleware
app.use(bodyParser.urlencoded({extended: true}));
// setting the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// setting the static folder
app.use(express.static(path.join(__dirname, 'public')));

// use sessions for tracking logins
app.use(session({
    secret: 'thesecret',
    resave: true,
    saveUninitialized: true
}));

//Importing the Routes
const regRoute = require('./routes/regroutes')
app.use('/reg', regRoute);

const uploadRoute = require('./routes/uploadRoute')
app.use('/upload', uploadRoute);

const loginRoute = require('./routes/loginRoute')
app.use('/login', loginRoute);

const logoutRoute = require('./routes/loginRoute')
app.use('/logout', logoutRoute);

const crudRoute = require('./routes/crudRoute')
app.use('/crud', crudRoute);





// mongoose db connection
mongoose.connect("mongodb://localhost:27017/node-demo", {useUnifiedTopology: true, useNewUrlParser: true});


//  Listening for requests: the server
app.listen(3000, ()=>{
    console.log("listening on 3000");
    
})












