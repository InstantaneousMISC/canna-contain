const mongoose = require('mongoose')
const schema = mongoose.Schema

const reviewSchema = new schema({
    strain: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'strains',
            required: true
        },
        name: String
    },
    provider: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'providers',
            required: true
        },
        name: {
            type: String
        }

    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        required: true
    },
    appearance: String,
    smell: String,
    taste: String,
    feel: String,
    burn: String,
    smoke: String,
    images: String,
    shortReview: Boolean,
    longReview: Boolean,
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Review = mongoose.model('review', reviewSchema)