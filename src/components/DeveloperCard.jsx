import * as React from 'react';
import { Link } from 'react-router-dom';
import { createContext, useEffect, useState } from "react";
import './MovieCard.css';


const DeveloperCard = ({ id, name, overview, email, img }) => {

    return (<div className="card" style={{ width: '19rem' }}>

        <img className="card-img-top" src={img} alt="Photo" />
        <div className="card-body ">
            <h5 className="card-title ">{name}</h5>

            <p className="card-text">Developer</p>
            <p className="card-text ">{overview}.....</p>

            <p className="card-text ">{email}</p>
            <a href='#' className="btn btn-dark ">Contact Me</a>

        </div>

    </div>
    );
}
export default DeveloperCard;