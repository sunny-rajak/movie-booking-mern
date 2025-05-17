const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://codeWithSunny:HFYQfFZSqUavbnDs@sunny.dtvqbk6.mongodb.net/movieTktBookingDB`
        );
        console.log(`Connected to database with ${mongoose.connect.host}`);
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = connectDB;
