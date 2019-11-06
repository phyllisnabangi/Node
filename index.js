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

app.get('/about', (req, res) => {
    res.send('This is the about us page')
})

//POST Request
app.post('/', (req, res) => {
    res.send('Got a POST request')
})

//PUT Method
app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user')
})

//DELETE Method
app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})
