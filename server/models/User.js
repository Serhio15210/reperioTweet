const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: String,
    surname: {type: String},
    country: {type: String},
    phone: {type: String},
    email: {type: String, unique: true, required: true},
    nickname: {type: String, required: true},
    privilege: {type: String},
    roles: [{type: String, ref: 'Role'}],
    password: {type: String, required: true}
})

module.exports = mongoose.model('User', User)