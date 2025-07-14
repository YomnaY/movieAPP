import * as React from 'react';
import { Link } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";
import './MovieCard.css';


const MovieCard = ({ id, title, release_date, overview, img, fromApi }) => {


    return (<div className="card" style={{ width: '19rem' }}>


        <Link to={`/movies/${id}`} >
            <img className="card-img-top" src={fromApi ? img : `https://image.tmdb.org/t/p/w500${img}`} alt="" /></Link>
        <div className="card-body ">
            <h5 className="card-title ">{title}</h5>

            <p className="card-text">{release_date}</p>
            <p className="card-text ">{overview.slice(0, 50)}.....</p>


            <Link to={`/movies/${id}`} className="btn btn-dark ">Details</Link>


        </div>

    </div>
    );
}
export default MovieCard;