// Requiring the packages
const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

//Importing the Routes
const regRoute = require('./routes/regroutes')
app.use('/reg', regRoute);


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// middleware
app.use(bodyParser.urlencoded({extended: true}));

// mongoose db connection
mongoose.connect("mongodb://localhost:27017/node-demo");


//  Listening for requests: the server
app.listen(3000, ()=>{
    console.log("listening on 3000");
    
})












