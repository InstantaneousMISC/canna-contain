const mongoose = require('mongoose')
const config = require('config')
const connectionString = config.get('db.DBConnectString')

const connectDb = async () => {
    try {
        console.log("connecting")
        await mongoose.connect(connectionString, {
            useNewUrlParser: true
        })
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log("DB connected furrrr sharrrr")
        })
        console.log(`Connected to DB. Readystate: ${db.readyState}`)
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDb;