const mongoose = require('mongoose')
const schema = mongoose.Schema

const cannabinoidSchema = new schema(
    {
        name: {
            type:string,
        },
        properties: [
            {
                uses: {
                    type:string
                }
            }
        ]
    }
)

module.exports = Cannabinoid = mongoose.model('cannabinoid', cannabinoidSchema)