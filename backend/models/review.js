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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    indoor: {
        type: Boolean
    },
    outdoor: {
        type: Boolean
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
    appearance: {
        type: Number,
        min: 0,
        max: 10,
    },
    smell: {
        type: Number,
        min: 0,
        max: 10,
    },
    taste: {
        type: Number,
        min: 0,
        max: 10,
    },
    feel: {
        type: Number,
        min: 0,
        max: 10,
    },
    burn: {
        type: Number,
        min: 0,
        max: 10,
    },
    smoke: {
        type: Number,
        min: 0,
        max: 10,
    },
    images: String,
    feelings: String,
    method: String,
    dateAdded: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Review = mongoose.model('review', reviewSchema)