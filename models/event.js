const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('Event', eventSchema);