const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: String,
    language: String,
    time: String,
    type: String,
});

const movie = mongoose.model("movies-details", movieSchema);
module.exports = movie;
