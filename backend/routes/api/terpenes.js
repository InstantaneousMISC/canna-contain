const express = require('express')
const router = express.Router()
const Terpene = require('../../models/terpene.js')

router.get('/', async (req, res) => {
    try{
        const terpene = await Terpene.find((err, terps) => {
            if(err){
                res.send('No terpenes retrieved').status(500)
                return console.log('no terpenes found')
            }
            console.log(terps)
            res.send(terps).status(200)
        })
        
    }catch(err){
        console.log(err)
    }
})

router.post('/add', async (req, res) => {
    try{
        let terpeneData = req.body
        if(!terpeneData){
            res.send('No params received')
            return console.log('no params received')
        }
        
        let newTerpene = await new Terpene(terpeneData)
        await newTerpene.save((err, terp) => {
            if(err) res.send({errors: {
                msg: 'error storing terpene data',
                error: err
            }}).status(500)

            res.send(terp).status(200)
        })
    }catch(err){
        console.log(err)
    }
})

module.exports = router