const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Vehicles Schema
let VehicleSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    minSpeed: {
        type: Number,
        default: 0
    },
    maxSpeed: {
        type: Number,
        required: true
    },
    speed : {
        type: Number,
        default: 0
    },
    loadingCapacity: {
        type: Number,
        required: false
    }
});

VehicleSchema.index({ date: 1 }, { expireAfterSeconds: 1200 });

module.exports = Vehicle = mongoose.model('vehicle', VehicleSchema);