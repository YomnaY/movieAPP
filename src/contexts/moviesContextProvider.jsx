import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const moviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
    const [moviesArr, setMovies] = useState([]);
    const [filteredArr, setFilteredArr] = useState([]);
    const [developersArr] = useState([
        { id: uuid(), name: "Yomna Abdelsalam", overview: "information about the designer ", email: "yomna@gmail.com", img: "person.png" },
        { id: uuid(), name: "Eng. Nada Mostafa", overview: "information about the ITI instructor", email: "nada@gmail.com", img: "person.png" },
        { id: uuid(), name: "Eng. Yasmin Ahmed", overview: "information about the ITI instructor", email: "yasmin@gmail.com", img: "person.png" },
        { id: uuid(), name: "Doaa Mohamed", overview: "information about the ITI instructor", email: "doaa@gmail.com", img: "person.png" },
    ]);
    const [filterdDevelopersArr, setFilterdDev] = useState([developersArr]);


    const addMoviefun = (movieData) => {

        setMovies([...moviesArr, { ...movieData, id: moviesArr.length }]);
    };



    const recWord = (data) => {
        setFilteredArr(moviesArr.filter((m) => m.title.toLowerCase().includes(data.toLowerCase())));
    };
    const recWord2 = (data) => {
        setFilterdDev(developersArr.filter((m) => m.name.toLowerCase().includes(data.toLowerCase())));
    };

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
            .then(res => {
                setMovies(res.data.results);
                setFilteredArr(res.data.results);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        setFilteredArr(moviesArr);
    }, [moviesArr]);

    useEffect(() => {
        setFilterdDev(developersArr);
    }, [developersArr]);

    return (
        <moviesContext.Provider value={{ filteredArr, moviesArr, developersArr, filterdDevelopersArr, addMoviefun, recWord, recWord2 }}>
            {children}
        </moviesContext.Provider>
    );
};

export default MoviesContextProvider;
