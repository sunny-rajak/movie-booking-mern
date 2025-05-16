import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail";
import BookingPage from "./Components/BookingPage";
import "./app.css";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                <Route
                    path="/movie/:movieName/book-now"
                    element={<BookingPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;
