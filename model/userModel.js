const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
// dotenv.config();
// console.log("Loaded MONGODB_URI:", process.env.MONGODB_URI);


// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI;

// console.log("mongo url",mongoURI);
// mongoose.connect("mongodb://localhost:27017/paytm")


mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Create a schema for user
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 60,
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 60,
    },
});


const User = mongoose.model('User', userSchema);

module.exports = {
    User,
};
