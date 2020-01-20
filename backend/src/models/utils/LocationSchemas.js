const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    type:{
        type: String,
        enum: ['Point'],
        required: true,
    },
    cordinates: {
        type: [Number],
        required: true,
    },
});

module.exports = LocationSchema;