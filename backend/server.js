const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

//Bring in middleware
app.use(cors())
app.use(bodyParser.json())

//Connect to DB
const connectDB = require('./config/dbConnect.js')
connectDB();

//Bind Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/messages',
    require('./routes/api/messages'))

app.listen(port, () => console.log(`app running on port ${port}`))

//Connect to DB