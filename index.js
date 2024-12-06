const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoute = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/users', userRoute);

// Root route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
app.listen(3000, ()=>{
    console.log("app is running on port " +  3000)
});