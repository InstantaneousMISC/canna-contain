const mongoose = require('mongoose')
const schema = mongoose.Schema

const strainSchema = new schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
    },
    appearance: String,
    smell: String,
    taste: String,
    type: String,
    feel: String,
    images: String,
    burn: String,
    smoke: String,
    notes: String,
    terpenes: [{}],
    providers: [{}],
    reviews: [{}],
    dateAdded: {
        type: Date,
        default: Date.now()
    },
})

module.exports = Message = mongoose.model('strain', strainSchema)