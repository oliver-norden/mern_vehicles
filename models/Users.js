const mongose = require('mongoose');
const Schema = mongose.Schema;

// Create users schema
let UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.index({ date: 1 }, { expireAfterSeconds: 1200 });

module.exports = User = mongose.model('vehicleUser', UserSchema);