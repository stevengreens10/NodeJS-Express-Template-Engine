var express = require('express')

var router = express.Router()

router.get('/', function(req, res){
    res.render('index', {
        random: Math.random()
    })
})

router.get('/form', function(req, res){
    res.render('form')
})

router.post('/form', function(req, res){
    console.log(req.body)
    res.render('form')
})

module.exports = router
