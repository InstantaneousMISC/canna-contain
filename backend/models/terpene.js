const mongoose = require('mongoose')
const schema = mongoose.Schema

const terpeneSchema = new schema({
    name: String,
    description: String,
    effects:{
        type:Array
    },
    uses:{
        type:Array
    }
})

module.exports = Terpene = mongoose.model('terpene', terpeneSchema)