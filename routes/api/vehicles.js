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

// @route   PUT api/vehicles
// @desc    Update a vehicle's speed
// @access  Public
router.put('/', (req, res) => {
    const increment = req.body.diff;
    Vehicle.findById(req.body.id)
        .then(vehicle => {
            const { speed, maxSpeed, minSpeed } = vehicle;
            let newSpeed = speed + increment;

            //Set new speed to max/ min speed if it is bigger or smaller
            if (newSpeed > maxSpeed) newSpeed = maxSpeed;
            else if (newSpeed < minSpeed) newSpeed = minSpeed;
            
            vehicle.speed = newSpeed;
            vehicle.save()
                .then(updatedVehicle => res.json(updatedVehicle));
        })
        .catch(err=>res.status(404).json({success: false}));
});

module.exports = router;