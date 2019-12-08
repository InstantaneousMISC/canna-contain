const mongoose = require('mongoose')
const schema = mongoose.Schema

const strainSchema = new schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: String,
    images: String,
    effects: String,
    cannabiniods: [{
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'cannabinoid'
        }
    }],
    terpenes: [{
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'terpenes'
        },
        amount: String
    }],
    providers: [{
        providerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'providers'
        }
    }],
    reviews: [{
        reviewID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'reviews'
        },
    }],
    dateAdded: {
        type: Date,
        default: Date.now()
    },
    preferred: {
        type: Boolean,
        default: false
    }
})

module.exports = Message = mongoose.model('strain', strainSchema)