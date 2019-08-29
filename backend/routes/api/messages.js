const express = require('express')
const router = express.Router();
const message = require('../../models/message')

router.get('/', async (req, res) => {
    try {
        //remove comment from next line to delete all messages in db
        //let deletedMessages = await message.deleteMany({})

        //Retrieve messages from db
        let messagesFromDB = await message.find({}, (err, message) => {
            if (err) console.error(err)
        })

        console.log(messagesFromDB)
        //respond with messages
        res.send(messagesFromDB)

    } catch (err) {
        console.error(err)
    }
})

router.post('/', (req, res) => {
    try {
        let msg = req.body.message

        var newMessage = new message({
            "message": msg
        })

        newMessage.save((err, message) => {
            if (err) return console.error(err)
            res.send(message)
            return console.log(message)
        });
    } catch (err) {
        console.error(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        //Find message by ID and remove from DB
        await message.find({
            '_id': req.params.id
        }).remove()

        res.json({
            'note': 'message deleted'
        })
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;