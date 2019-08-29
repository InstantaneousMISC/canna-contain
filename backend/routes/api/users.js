const express = require('express')
const router = express.Router()
const Users = require("../../models/User")
const bcrypt = require('bcryptjs');
const {
    check,
    validationResult
} = require('express-validator');

router.get('/', (req, res) => {
    console.log("user register route")
    res.send('users route')
})

//POST Registration
router.post(
    '/',
    //Validate Input
    [
        check('name').not().isEmpty().withMessage("Name Can't be empty"),
        check('userName').isLength({
            min: 8
        }).not().isEmail().withMessage("Please enter a Username"),
        check('email').isEmail().not().isEmpty().withMessage("Email Can't be empty"),
        check("password").isLength({
            min: 8
        }).not().isEmpty().withMessage("You Must Enter a password")
    ],
    //react accrding to input validation
    async (req, res) => {
        const saltRounds = 10;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors)
        }
        const User = req.body
        //continue if there are no errors
        //hash user password
        bcrypt.hash(User.password, saltRounds, (err, hash) => {
            if (err) {
                return res.send(err)
            }
            User.password = hash
            return User
        })

        //Create user in DB
        var newUser = await new Users(User)
        return res.send(newUser)





        //store user in the bd

    })

module.exports = router;