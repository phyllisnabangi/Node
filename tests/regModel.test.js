const mongoose = require('mongoose')
const User = require('../model/regModel')

// Create test suite
describe('registration model test', ()=>{

    //Set up: runs before any test; in this case create out testdb
    beforeAll( async() =>{
        try{
            await mongoose.connect("mongodb://localhost:27017/test-db", {useUnifiedTopology: true, useNewUrlParser: true});
            await User.deleteMany({})
        } catch (err) {
            console.log("database error" + err);  
        }
    })

    test('should be able to save', async()=> {
        try{
            const user= new User({'firstname': 'Joy'})
            await user.save()
            
        } catch(err){
            console.log("Saving error" + err);  
        }
        const items = await User.find()
        expect(items.length).toBe(1)       
    })

    test('should not save when first name isnt input', async () => {
        try {
            await (new Register({ lastname: 'Joreen' }).save())
        } catch (err) {
            console.log("database error " + err)
            expect(err.toString()).toBe('ValidationError: firstname: Please Enter first name')
        }
        const items = await Register.find({})
        expect(items.length).toBe(0)
    })

    //test tear down: 
    afterEach( async() =>{
        try{
            await User.deleteMany({})

        } catch (err) {
            console.log("database error" + err);  
        }
    })

})

