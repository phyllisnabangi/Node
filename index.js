const path = require('path')
const bodyParser = require('body-parser')
// creates app by calling express
const express =  require('express');
const app = express()

// body-parser to parse request body data
app.use(bodyParser.urlencoded({extended: true}))

//Setting the view engine to pug
app.set('view engine', 'pug');

//Setting the folder
app.set('views', path.join(__dirname, 'views'))



//GET Route
app.get('/reg', (req, res, next) => {
    res.render('form');
})
//POST Route
app.post('/reg', (req, res) => {
    // console.log("Form has been posted");
    console.log('body', req.body);
    console.log('Query Params', req.query);
    // res.send(req.body)   
})

//Submit Route
app.post('/submit', (req, res) => {
    // res.send("Hello " + req.body.firstname);
     res.render('form_data', {
        fname: req.body.firstname,
        lname: req.body.lastname,
        email: req.body.emailaddress,
        gender: req.body.gender,
        country: req.body.country,
        city: req.body.city,
        password: req.body.password
    });
})

app.get('/index', (req, res) => {
    res.render('index');
})
app.get('/data', (req, res) => {
    res.render('form_data');
})

//Setting the server to port 3000
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

//Path Params - set them at the path
app.get('/users/:name', (req, res) => {
    res.send('Hello ' + req.params.name)
})
//Query Params - set them at the url
app.get('/param', (req, res) =>{
    res.send('This is a class ' + req.query.class + ' cohort ' + req.query.cohort)
})


//Error Page
app.get('*', (req, res) => { res.send('Page not found');});




