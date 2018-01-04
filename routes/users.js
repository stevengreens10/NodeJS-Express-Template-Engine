var express = require('express')
var mongoose = require('mongoose')

// object used for routing
var router = express.Router()

var userSchema = new mongoose.Schema({
    username: String,
    password: String
})

var User = mongoose.model('users', userSchema)

router.get('/', function(req, res){
    // Grabs user data from mongodb
    // The {} specifies that it should find anything
    User.find({}, function(err, data){
        if(err) throw err

        res.render('user', {
            users: data
        })
    })
})

router.post('/', function(req, res){
    var user = req.body.username
    var pass = req.body.password

    var user = User({
        username: user,
        password: pass
    }).save(function(err){
        if(err) throw err

        console.log("User saved")
    })

    res.redirect('/')
})

module.exports = router
