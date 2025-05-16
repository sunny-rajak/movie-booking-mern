import React from "react";
import "../Css/home.css";

// import required modules
import NavbarPage from "../Components/NavbarPage";
import Footer from "../Components/Footer";
import MovieSection from "../Components/MovieSection";

const Home = () => {
    return (
        <div className="body">
            <NavbarPage />
            <MovieSection />
            <Footer />
        </div>
    );
};

export default Home;
