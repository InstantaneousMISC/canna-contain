const express = require('express')
const router = express.Router();
const Strains = require('../../models/strains.js')

router.get("/", async (req, res) => {
    try {
        console.log("here")
        await Strains.find((err, strains) => {
            if (err)
                return res.status(400).json({
                    error: {
                        msg: "Error retrieving strains"
                    }
                })
            res.json(strains.length ? strains : "No strains available")
            console.log("'get strains' completed succesfully")
        })
    } catch (err) {
        console.log(err)
    }
})

router.post("/addStrain", async (req, res) => {
    console.log("In there")
    try {
        let strain = req.body
        console.log(req.body.name)
        let newStrain = await new Strains(strain)
        newStrain.save((err, strain) => {
            if (err) res.send({
                errors: {
                    msg: "Problem saving strain"
                }
            }).status(500)
            res.send(strain).status(200)
        })

    } catch (err) {
        console.log(err)
    }
})


//View strain route
router.get("/:id", async (req, res) => {
    //Retrieve id from attached url param
    let strainId = req.params.id
    console.log(`In "viewStrain" route. Editting id# ${strainId}`)
    try {
        Strains.findOne({
            "_id": strainId
        }, (err, strain) => {
            if (err) {
                console.log(err)
                res.json({
                    error: {
                        "msg": err
                    }
                })
            }
            res.json(strain).status(200)
        })



    } catch (err) {
        console.log(err)
    }
})

router.put("/editStrain:id", async (req, res) => {
    //Retrieve id from attached url param
    let strainId = req.param.id
    console.log(`In "editStrainName" route. Editting id# ${strainId}`)
    try {
        Strains.findOne({
            "_id": strainId
        }, (err, strain) => {
            if (err) {
                console.log(err)
                res.json({
                    error: {
                        "msg": err
                    }
                })
            }
            strain = req.body;
        })



    } catch (err) {
        console.log(err)
    }
})

module.exports = router