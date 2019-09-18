const mongoose = require('mongoose')
const schema = mongoose.Schema
const strainSchema = require('./strains').schema
const reviewSchema = require('./review').schema

const providerSchema = new schema({
    name: {
        type: String,
        required: true
    },
    url: String,
    description: String,
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    strains: [strainSchema],
    reviews: [reviewSchema]
})

module.exports = provider = mongoose.model('provider', providerSchema)