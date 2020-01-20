const mongoose = require('mongoose');

const LocationSchema = require('./utils/LocationSchemas');

const DevSchema = new mongoose.Schema({

    nome: String,
    github_username: String,
    bio: String,
    avatar: String,
    techs: [String],
    location: {
        type: LocationSchema,
        index: '2dsphere',
    }

});

module.exports = mongoose.model('Dev', DevSchema);