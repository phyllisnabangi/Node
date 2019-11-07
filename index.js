const path = require('path')
const express =  require('express');
const app = express()

//Setting the view engine to pug
app.set('view engine', 'pug');

//Setting the folder
app.set('views', path.join(__dirname, 'views'))

app.get('/reg', (req, res) => {
    res.render('form');
})

app.get('/index', (req, res) => {
    res.render('index');
})
//end of pug

app.get('/param', (req, res) =>{
    res.send('This is a class ' + req.query.class + ' cohort ' + req.query.cohort)
})

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
//Path Params
app.get('/users/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})



//Error Page
app.get('*', (req, res) => { res.send('Page not found');});




