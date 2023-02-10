require('dotenv').config();
const express = require('express'); const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs'); const User = require('../models/Usermodel');
const jwt = require('jsonwebtoken'); const jwtSignature = process.env.JWT_SIGNATURE
const fetchuser = require('../middleware/featchuser'); //middlewere function

// Route 1 : create user : POST "/createuser" login not required
router.post('/createuser',
    [   // validations through express validator
        body('name', 'invalid name').isLength({ min: 3 }),        // name must be at least 3 chars long
        body('email', 'invalid email').isEmail(),                 // username must be an email
        body('password', 'invalid password').isLength({ min: 5 }) // password must be at least 5 chars long
    ],
    async (req, res) => {
        let success = false;

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // checking for user exist with same email
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ error: "sorry user with this email alredy exist" })
            }

            //hashing password
            const salt = await bcrypt.genSalt(10);
            const securedPassword = await bcrypt.hash(req.body.password, salt)

            //creating user in database
            user = await User.create({
                name: req.body.name, email: req.body.email, password: securedPassword,
            })

            //signing payload with jwt signature to create authentication token
            const payload = {
                user: { id: user.id }
            }
            const authToken = jwt.sign(payload, jwtSignature)
            success = true;

            res.json({ success, authToken, user }) // final response 
        }
        catch (error) {
            res.status(500).json({ error: error.massage, type: "server error" })
        }

    },
);

// Route 2 : authenticate user : POST "/login" login not required
router.post('/login',
    [   // validations through express validator
        body('email', 'invalid email').isEmail(),    // username must be an email
        body('password', 'empty password').exists()  // password can not be blanck
    ],
    async (req, res) => {
        const { email, password } = req.body;
        let success = false;

        //function for finding validation error in this request and wraps them in an object
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            // checking for user exist with this email
            let user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ error: " invalid credencials " })
            }

            //password compare with bycrypt
            const passwordCompare = await bcrypt.compare(password, user.password)
            if (!passwordCompare) {
                return res.status(400).json({ error: " invalid credencials " })
            }

            //signing payload with jwt signature to create authentication token
            const payload = { user: { id: user.id } }
            const authToken = jwt.sign(payload, jwtSignature)
            success = true;

            res.send({ success, authToken, user }) // final response

        } catch (error) {
            res.status(500).json({ error: error.massage, type: "server error" })
        }
    },
);

// Route 3 : get user detail : GET "/getuser" login required
router.get('/getuser', fetchuser,
    async (req, res) => {
        try {
            // getting user
            const userId = req.user.id
            let user = await User.findById(userId)

            res.send(user) //final response

        } catch (error) {
            res.status(500).json({ error: error.massage, type: "server error" })
        }
    },
);

module.exports = router 