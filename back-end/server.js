const express = require("express");
const connectDB = require("./db/dbConnection");
const cors = require("cors"); // allows connection between different ports. As our backk-end and front-end are running on different ports so that's why we are using cors
const movieRoutes = require("./routes/movieRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

// Middleware for parsing JSON
app.use(express.json());
// Enable CORS
app.use(cors());

// Connect to the MongoDB database
connectDB();

app.use("/api/movies", movieRoutes);

app.listen(port, () => {
    console.log("server is listening on port 9000");
});
