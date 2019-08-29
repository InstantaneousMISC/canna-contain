const mongoose = require('mongoose')
const schema = mongoose.Schema

const messageSchema = new schema({
    message: {
        type: String
    }
})

module.exports = Message = mongoose.model('message', messageSchema)