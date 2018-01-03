var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
    res.render('index', {
        random: Math.random()
    })
})

module.exports = router
