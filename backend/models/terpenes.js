const mongoose = require('mongoose')
const schema = mongoose.Schema

const terpeneSchema = new schema({
    name: String,
    amount: String
})

module.exports = terpene = mongoose.model('terpene', terpeneSchema)