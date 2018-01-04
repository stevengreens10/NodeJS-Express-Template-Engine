var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/index')
var users = require('./routes/users')
var path = require('path')
var mongoose = require('mongoose')

var app = express()

mongoose.connect('mongodb://root:password@ds239587.mlab.com:39587/nodedigitaldb')

// Sets the port that the server will run on
app.set('port', (process.env.PORT || 3000))

// Sets the template engine to EJS
app.set('view engine', 'ejs')

// Parses POST requests and stores form data in req.body.(name)
app.use(bodyParser.urlencoded({extended:false}));

// Allows access to files in the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Moves routing at the / url path to routes/index.js
app.use('/', routes)
// Moves routing at the /users url path to routes/users.js
app.use('/users', users)

// Starts the server
app.listen(app.get('port'), function() {
    console.log("Server running on port " + app.get('port'))
})
