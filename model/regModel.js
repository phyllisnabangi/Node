// Requiring packages
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// schema definition
const nameSchema = new mongoose.Schema({
    firstname: { 
        type: String,
        required: 'Please Enter first name'
    },
    username: { 
        type: String,
        required: 'Please Enter user name',
        unique: true,
    },          
    lastname: String,
    emailaddress: String,
    gender: String,
    city: String,  
    country: String,
    password:{
       type: String,
       required: 'Please enter password'
    } 
});

//hashing a password before saving it to the database pre-save hook
nameSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next()
})

//authenticate input against database
nameSchema.statics.authenticate = async function (username, password) {
    const user = await this.findOne({ username: username })
    if (!user) {
        throw new Error('User not found.');
    }
    const match = await bcrypt.compare(password, user.password)
    if (match) {
        return user;
    }
}

//Creating an instance of the model
module.exports =  mongoose.model("User", nameSchema)