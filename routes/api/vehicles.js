const express = require('express');
const router = express.Router();

// Vehicle model
const Vehicle = require('../../models/Vehicles');

// @route   GET api/vehicles
// @desc    Get all vehicles
// @access  Public
router.get('/', (req, res) => {
    Vehicle.find()
        .sort({ date: -1 })
        .then(vehicles => res.json(vehicles))
});

module.exports = router;