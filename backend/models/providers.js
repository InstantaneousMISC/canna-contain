const mongoose = require('mongoose')
const schema = mongoose.Schema

const providerSchema = new schema({
    name: {
        type: String,
        required: true
    },
    url: String,
    description: String,
    coupon: String,
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
    }],
    preferred: {
        type: Boolean,
        default: false
    },
    address: String,
    phone: String,
    email: String
})

module.exports = provider = mongoose.model('provider', providerSchema)