import { useContext, useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { v4 as uuid } from "uuid"
import AddMovie from "./AddMovie";

import axios from "axios";
import SimpleBackdrop from "./Spinner";
import './MovieCard.css';
import { moviesContext } from "../contexts/moviesContextProvider";
import { Outlet } from "react-router-dom";
const Movies = () => {
  
  const { filteredArr } = useContext(moviesContext)

  if (!filteredArr) return <SimpleBackdrop></SimpleBackdrop>
  return (
    <div className="card-deck">

      {filteredArr.map((u) => <MovieCard key={u.id} id={u.id} title={u.title} release_date={u.release_date} overview={u.overview} img={u.poster_path} fromApi={u.fromApi}  ></MovieCard>

      )}


    </div>
  );
}

export default Movies;

