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

// @route   POST api/vehicles
// @desc    Add a vehicle
// @access  Public
router.post('/', (req, res) => {
    const newVehicle = new Vehicle({
        ...req.body
    });

    newVehicle.save()
        .then(vehicle => res.json(vehicle))
});

// @route   DELETE api/vehicles:id
// @desc    Delete a vehicle
// @access  Public
router.delete('/:id', (req, res) => {
    Vehicle.findByIdAndDelete(req.params.id)
        .then(()=>res.json({success: true}))
        .catch(err=>res.status(404).json({success: false}))
});

module.exports = router;