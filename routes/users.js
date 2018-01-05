var express = require('express')
var User = require('../models/user-model')
// object used for routing
var router = express.Router()

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

    User.find({
        username: req.body.username
    }, function(err, data){
        if(err) throw err

        // Creates a new user and saves it to the database if the username is unique
        if(data.length == 0){
            var user = User({
                username: req.body.username,
                password: req.body.password
            }).save(function(err){
                if(err) throw err
            })

            res.send(user)
        }else{
            res.status(422).send({
                error: "That username is taken!"
            })
        }
    })
})

router.delete('/:user', function(req, res){
    var user = req.params.user
    User.findOneAndRemove({
        username: user
    }, function(err){
        if(err) throw err
    })
    res.send("")
})

module.exports = router
