const express = require('express')
const router = express.Router()
const Users = require("../../models/User")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')
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
    '/signup',
    //Validate Input
    [
        check('name'),
        check('userName').isLength({
            min: 7
        }).not().isEmail().withMessage("Please enter a Username"),
        check('email').isEmail().not().isEmpty().withMessage("Email Can't be empty"),
        check("password").isLength({
            min: 8
        }).not().isEmpty().withMessage("You Must Enter a password")
    ],
    //react accrding to input validation
    async (req, res) => {
        console.log('Creating New User')
        //check for errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors)
        }
        try {
            let User = req.body
            //continue if there are no errors
            //Look for existing users with same email or username
            let existingUser = await Users.findOne({
                "email": User.email
            })
            let usernameExists = await Users.findOne({
                "userName": User.userName
            })
            if (existingUser || usernameExists) {
                return res.status(400).json({
                    errors: [{
                        msg: "User already exists"
                    }]
                })
            }
            console.log('Verified no same user exists')

            //hash user password
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds)
            const hash = await bcrypt.hash(User.password, salt)
            User.password = hash
            console.log("hashed")

            //Create user in DB
            var newUser = await new Users(User)
            await newUser.save()
            console.log("User created")

            const payload = {
                "user": {
                    id: newUser.id,
                    name: newUser.name,
                    userName: newUser.userName,
                    email: newUser.email,
                },

            }

            jwt.sign(payload, config.get('key'), {
                expiresIn: 360000
            }, (err, token) => {
                if (err) throw err;
                res.json({
                    "token": token,
                    "user": {
                        name: newUser.name,
                        userName: newUser.userName,
                        email: newUser.email,
                        id: newUser.id
                    }
                })
                console.log({
                    "msg": "Token created and returned",
                    "token": token,
                    "user": {
                        name: newUser.name,
                        userName: newUser.userName,
                        email: newUser.email,
                        id: newUser.id
                    }
                })
            })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    })

//POST Registration
router.post(
    '/login',
    //Validate Input
    [
        check('email').isEmail().not().isEmpty().withMessage("Email Can't be empty"),
        check("password").isLength({
            min: 8
        }).not().isEmpty().withMessage("You Must Enter a password")
    ],
    //react accrding to input validation
    async (req, res) => {
        console.log('Creating New User')
        //check for errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.send(errors)
        }
        try {

            let User = req.body
            //continue if there are no errors
            //Look for existing users with same email
            let existingUser = await Users.findOne({
                "email": User.email
            })
            if (!existingUser) {
                return res.status(400).json({
                    errors: [{
                        msg: "User doesn't exist"
                    }]
                })
            }
            console.log('Verified User Exists in DB')

            //compare password using bcrypt
            let passMatch = await bcrypt.compare(User.password, existingUser.password)
            if (!passMatch) {
                return res.json({
                    "errors": {
                        "msg": " Password doesn't match"
                    }
                })
            }
            //If password matches create and send payload
            const payload = {
                "user": {
                    id: existingUser.id,
                    name: existingUser.name,
                    userName: existingUser.userName,
                    email: existingUser.email
                },

            }

            await jwt.sign(payload, config.get('key'), {
                expiresIn: 360000
            }, (err, token) => {
                if (err) throw err;
                res.json({
                    "token": token,
                    "user": {
                        id: existingUser.id,
                        name: existingUser.name,
                        userName: existingUser.userName,
                        email: existingUser.email
                    }
                })
            })
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    })

module.exports = router;