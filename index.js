// console.log("Hello World");
const express =  require('express');
const app = express()

app.listen(3000, () => {
    console.log('listening on 3000');
    })

//Sending a GET request
app.get('/', (req, res) => {
    res.send('Hello World')
})