const mongose = require('mongoose');
const Schema = mongose.Schema;

// Create users schema
const UserSchema = new Schema({
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

module.exports = User = mongose.model('user', UserSchema);