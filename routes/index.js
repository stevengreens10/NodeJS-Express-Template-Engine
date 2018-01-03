var express = require('express')

// object used for routing
var router = express.Router()


router.get('/', function(req, res){
    // Serves the views/index.ejs file with a random number
    res.render('index', {
        random: Math.random()
    })
})

router.get('/form', function(req, res){
    res.render('form')
})

router.post('/form', function(req, res){
    // Data from the form is parsed through bodyparser and put into req.body
    console.log(req.body)
    res.render('form')
})

module.exports = router
