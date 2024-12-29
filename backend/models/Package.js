// backend/models/Package.js
const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);

