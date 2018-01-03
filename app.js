var express = require('express')
var routes = require('./routes/index')

var app = express()

app.set('port', (process.env.PORT || 3000))
app.set('view engine', 'ejs')

app.use('/', routes)

app.listen(app.get('port'), function() {
    console.log("Server running on port " + app.get('port'))
})
