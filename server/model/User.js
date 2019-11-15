const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
        login: {
            type: String,
            required: true
        },
        password: {
            type: Number,
            required: true
        },
        fullname: {
            type: String
        },
        email: {
            type: String
        },
        phone: {
            type: Number
        }
    })
;
module.exports = mongoose.model('Users', User);