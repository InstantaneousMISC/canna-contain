const express = require('express')
const router = express.Router()
const provider = require('../../models/providers')

router.get('/', async (req, res) => {
    try {
        const providers = await provider.find((err, providersFound) => {
            if (err)
                return res.status(400).json({
                    error: {
                        msg: "Error retrieving providers"
                    }
                })
            res.json(providersFound).status(200)
            console.log("'get provider' completed succesfully")
        })

    } catch (err) {
        res.json({
            error: {
                msg: err
            }
        }).send(err).status(500)
    }

})

router.post('/addProvider', async (req, res) => {
    try {
        //Import clients provided provider information
        const providerInfo = await req.body
        //Instantiate/create a new provider object
        const NewProvider = await new provider(providerInfo)
        //If no provider created
        if (!NewProvider) {
            console.log("We encountered a problem creating a provider")
            res.json({
                error: {
                    msg: "We encountered a problem creating a provider"
                }
            }).status(500)
        }
        //If creating provider completed succesfully
        NewProvider.save()
        res.json(NewProvider).status(200)
    } catch (err) {
        res.json({
            error: {
                msg: err
            }
        }).send(err).status(500)
    }

})

module.exports = router