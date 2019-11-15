// Requiring mongoose
const mongoose = require("mongoose");

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
    country: String,
});
// // Creating an instance of the model
// const User = mongoose.model("User", nameSchema)

module.exports =  mongoose.model("User", nameSchema)