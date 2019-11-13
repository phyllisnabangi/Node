// Requiring the packages
const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");


const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));

// mongoose db connection
mongoose.connect("mongodb://localhost:27017/node-demo");

// schema definition
const nameSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: 'Please Enter first name'
               },
    lastname: String,
    emailaddress: String,
    gender: String,
    city: String,  
});
// Creating an instance of the model
var User = mongoose.model("User", nameSchema)

// Routes
app.get('/reg', (req, res) => {
    res.render('form');
})

app.post('/reg', (req, res) => {
    const myData= new User(req.body)
    myData.save()
        .then(item => {
            User.find().then(
                items => {
                    res.render('list', {users:items})
                })           
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
 });

//  Listening for requests: the server
app.listen(3000, ()=>{
    console.log("listening on 3000");
    
})












