import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FiShare2 } from "react-icons/fi";
import "../Css/movieDetail.css";
import NavbarPage from "./NavbarPage";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `https://movie-booking-mern-dip4.onrender.com/api/movies/${id}`
            )
            .then((res) => setMovie(res.data))
            .catch((err) => console.error("Error fetching movie:", err));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            <NavbarPage />
            <section className="movie-dtl-sc">
                <div className="bg-image-sc">
                    <div className="movie-detail-sc">
                        <div className="image-sc">
                            <img src={movie.image} alt={movie.title} />
                        </div>

                        <div className="movie-data">
                            <h1>{movie.title}</h1>
                            <span className="movie-d-l">{movie.language}</span>
                            <div className="movie-d-tt">
                                {movie.time}
                                <span> • </span>
                                {movie.type}
                            </div>
                            <button
                                className="ticket-btn"
                                onClick={() => {
                                    navigate(`/movie/${movie.title}/book-now`);
                                }}
                            >
                                Book Now
                            </button>
                        </div>

                        <div className="share-sc">
                            <div className="share-btn">
                                <FiShare2 className="share-ic" />
                                <span>Share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovieDetails;
