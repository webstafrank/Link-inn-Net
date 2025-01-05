// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
const authRoutes = require('./routes/authRoutes');
const packageRoutes = require('./routes/packageRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/packages', packageRoutes); // Internet packages routes
app.use('/api/posts', postRoutes); // Community posts routes

// Default route for health check
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

