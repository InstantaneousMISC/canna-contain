const mongoose = require('mongoose')
const schema = mongoose.Schema

const reviewSchema = new schema({
    description: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
    },
    appearance: String,
    smell: String,
    taste: String,
    feel: String,
    images: String,
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Review = mongoose.model('review', reviewSchema)