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
    strains: [{
        strainID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "strain"
        },
        name: String
    }],
    reviews: [{
        description: String,
        date: {
            type: Date,
            default: Date.now()
        }
    }]
})

module.exports = provider = mongoose.model('provider', providerSchema)