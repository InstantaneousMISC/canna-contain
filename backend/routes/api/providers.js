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


//Find multiple providers
router.post('/findProvider', async (req, res) => {
    try {
        console.log("finding providers")
        //retrieve request data
        const providerData = req.body.providerID
        console.log(providerData)
        //Search for a provdier by ID
        let foundProvider = await provider.findById(providerData) //find provider by provided id

        if (!foundProvider) res.send({
            message: {
                msg: "No Providers Found"
            }
        }).status(200)
        res.send(foundProvider).status(200)
    } catch (err) {
        console.log(err)
        res.send({
            error: {
                msg: "Issue finding provider"
            }
        })
    }
})

module.exports = router