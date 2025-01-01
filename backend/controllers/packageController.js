// backend/controllers/packageController.js
const Package = require('../models/Package');

// Get all packages
exports.getPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new package
exports.createPackage = async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const newPackage = await Package.create({ name, price, description });
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// backend/controllers/packageController.js
const Package = require('../models/Package');

// Get all packages
exports.getPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new package
exports.createPackage = async (req, res) => {
    const { name, price, description } = req.body;

    try {
        const newPackage = await Package.create({ name, price, description });
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

