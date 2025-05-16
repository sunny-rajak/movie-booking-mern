const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Movies-Data");
        console.log("Connected  to database");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;
