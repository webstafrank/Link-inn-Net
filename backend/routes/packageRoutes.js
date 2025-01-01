// backend/routes/packageRoutes.js
const express = require('express');
const { getPackages, createPackage } = require('../controllers/packageController');
const router = express.Router();

router.get('/', getPackages);
router.post('/', createPackage);

module.exports = router;

