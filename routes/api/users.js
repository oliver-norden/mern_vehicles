const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const returnUser = require('./returnUser');

// User model
const User = require('../../models/Users');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
    const { name, userName, password } = req.body; // Deconstruct user data from request

    // Validation
    if (!name || !userName || !password) return res.status(404).json({ msg: 'Please enter all fields' });

    // Check if user already exists
    User.findOne({ userName })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists' }); // If user exists, respond with bad request status

            const newUser = new User({
                name,
                userName,
                password
            });

            // Generate salt and hash password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
                    if (err) throw err;
                    newUser.password = hashedPassword;
                    newUser.save()

                    returnUser(newUser, res);
                });
            });
        });
});

module.exports = router;