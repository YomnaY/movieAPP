import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { moviesContext } from "../contexts/moviesContextProvider";
import SimpleBackdrop from "../components/Spinner";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const MovieDetails = () => {
    
    const [movie, setMovie] = useState(null);
    const { moviesArr  } = useContext(moviesContext);
    const { movieId } = useParams();

    useEffect(() => {
        if (!moviesArr) return;

        const foundMovie = moviesArr.find((u) => u.id === +movieId);
        setMovie(foundMovie || null);
    }, [moviesArr, movieId]);

    if (!movie) return <SimpleBackdrop />;

    return (
        <div className='container details bg-dark p-5'>
            <div className='row'>
                <div className='col-sm-12 col-lg-6'>
                    <img src={movie.fromApi ? movie.poster_path :`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Photo" width={"400px"} height={"400px"} />
                   
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <h1>{movie.title}</h1>
                    <br />
                    <h3>Overview</h3>
                    <h6>{movie.overview}</h6>
                    <br />
                    <h3>Release Date : {movie.release_date}</h3>
                    <br />

                    <div className="d-flex gap-3">
                        <IoStar style={{ color: 'yellow', fontSize: "24px" }} />
                        <IoStar style={{ color: 'yellow', fontSize: "24px" }} />
                        <IoStar style={{ color: 'yellow', fontSize: "24px" }} />
                        <IoStar style={{ color: 'yellow', fontSize: "24px" }} />
                        <IoStarHalf style={{ color: 'yellow', fontSize: "24px" }} />
                    </div>
                    <br />
                    <br />
                    <button className="btn btnn btn-success ">Add To Your List</button>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
