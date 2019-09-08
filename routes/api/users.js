const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config'); // JWT secret

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

                    // Send user data as response with new jwt (no password included)
                    .then(user => {
                        jwt.sign(
                            { id: user.id },
                            config.get('jwtSecret'),
                            { expiresIn: 1800 }, // Token expiration
                            (err, token) => {
                                if(err) throw err;
                                const { id, name, userName } = user;
                                res.json({
                                    token,
                                    user: {
                                        id,
                                        name,
                                        userName
                                    }
                                });
                            }
                        );
                    });
                });
            });
        });
});

module.exports = router;