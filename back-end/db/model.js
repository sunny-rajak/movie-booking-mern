const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: String,
    language: String,
    time: String,
    type: String,
});

const Movie = mongoose.model("movie-details", movieSchema);
// const Movie =
//     mongoose.models["movies-details"] ||
//     mongoose.model("movies-details", movieSchema);

module.exports = Movie;
