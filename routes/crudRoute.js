const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../model/regModel')

//returns a specific page
router.get('/search', async (req, res) => {
    if (req.session.user) {
        // console.log(req.session.user)
        try {
            // let allows for variable reassigment
            let items = await Register.find()
            if (req.query.city) {
                items = await Register.find({ city: req.query.city })
            }
            res.render('list', { users: items, currentUser: req.session.user })
        } catch (err) {
            res.status(500).send('Unable to search the database')
        }
    } else {
        console.log("cant find session")
        res.redirect('/login')
    }
})

//deletes a specific item
router.post('/delete', async (req, res) => {
    try {
        await Register.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(500).send('unable to delete from database')
    }
})
module.exports = router;