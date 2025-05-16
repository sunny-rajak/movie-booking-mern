import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "../Css/movieSection.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MovieSection = () => {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get("https://your-render-backend-url.onrender.com/api/movies")
            .then((res) => {
                console.log("Fetched movies:", res.data);
                setMovies(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="movie-section-wrapper">
            <div className="offer-section">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="offerSwiper"
                >
                    <SwiperSlide className="offer-slider">
                        <img src="/images/offer1.avif" />
                    </SwiperSlide>
                    <SwiperSlide className="offer-slider">
                        <img src="/images/offer2.avif" />
                    </SwiperSlide>
                    <SwiperSlide className="offer-slider">
                        <img src="/images/offer3.avif" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="movies-section">
                <h2>Recommended Movies</h2>
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 4 },
                    }}
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation]}
                    className="movieSwiper"
                >
                    {movies.map((movie, index) => (
                        <SwiperSlide key={index} className="movie-slider">
                            <img
                                src={movie.image}
                                alt={movie.title}
                                onClick={() => navigate(`/movie/${movie._id}`)}
                            />
                            <div className="movie-info">
                                <div className="movie-title">{movie.title}</div>
                                <div className="movie-type">{movie.type}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default MovieSection;
