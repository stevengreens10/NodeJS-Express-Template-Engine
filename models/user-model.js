var mongoose = require('mongoose')

// Creates a schema for how the users will be stored in the db
var userSchema = new mongoose.Schema({
    username: String,
    password: String
})

// Creates the collection 'users' in the database according to the schema
// This object is also used to access the collection (find/modify/add documents)
var User = mongoose.model('users', userSchema)

module.exports = User
