const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const returnUser = require('./returnUser');
const auth = require('../../middleware/auth');

// User model
const User = require('../../models/Users');

// @route   POST api/users
// @desc    Login user
// @access  Public
router.post('/', (req, res) => {
    const { userName, password } = req.body; // Deconstruct user data from request

    // Validation
    if (!userName || !password) return res.status(404).json({ msg: 'Please enter all fields' });

    // Check if user exists
    User.findOne({ userName })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'Invalid username or password' }); // If user does not exists, respond with bad request status

            // Validate password
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if(!isMatch) return res.status(400).json({ msg: 'Invalid username or password' }); // If password does not match, respond with bad request status

                        returnUser(user, res);
                    });
        });
});

// @route   GET api/auth/users
// @desc    Get user data from id in token
// @access  Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})

module.exports = router;