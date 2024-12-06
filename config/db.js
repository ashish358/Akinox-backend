const mongoose = require('mongoose');
// const dotenv = require('dotenv');


const connectDB = async () => {
    try {
        // console.log(process.env.MOGODEB_URI);
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI);

        console.log("mongodb connected succesfully");
    } catch (error) {
        console.log("error connecting mongodb",error.message);
        process.exit(1);        
    }
};

module.exports = connectDB;