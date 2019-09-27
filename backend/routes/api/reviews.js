const express = require('express')
const router = express.Router()
const Review = require('../../models/review')

router.get("/", async (req, res) => {
    console.log("Entered")
    const reviews = await Review.find((err, retrievedReviews) => {
        if (err) {
            res.send(err).status(400)
        }
        res.send(retrievedReviews).status(200);
    });
})

router.get("/:strainId", async (req, res) => {
    try {
        const strainId = req.params.strainId;
        console.log("Entered getReviews with strain ID: " + strainId)
        const reviews = await Review.find({
            "strain.id": strainId,
        })
        if (!reviews) {
            res.send({
                error: {
                    msg: "Problem retrieving reviews"
                }
            }).status(400)
        }
        res.send(reviews).status(200)
        console.log(reviews)
    } catch (err) {
        console.log(err)
    }
})

router.post("/addreview", async (req, res) => {
    console.log("Entered Add Review")
    try {
        console.log("Entered Add Review")
        const reviewData = req.body
        const newReview = await new Review(reviewData)
        if (!newReview) {
            res.send({
                error: {
                    msg: "Error adding review"
                }
            }).status(400)
        }
        newReview.save();
        res.send(newReview).status(200)
    } catch (err) {
        console.log(err)
    }
})


module.exports = router