const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        type: String,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    date: {
        type: Date,
        default: Date.now()
    }

})

module.exports = User = mongoose.model('user', UserSchema)