import React, { useContext, useState } from 'react';
import './MovieCard.css';
import { useNavigate } from 'react-router-dom';
import { moviesContext } from '../contexts/moviesContextProvider';
const AddUser = () => {

    const { addMoviefun } = useContext(moviesContext)

    const [movie, setMovie] = useState({ title: "", overview: "", release_date: "", poster_path: "", fromApi: "true" })
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/")
        addMoviefun(movie)
        setMovie({ title: "", overview: "" })
    }

    const handleChange = (event) => {

        const { name, value } = event.target
        setMovie({ ...movie, [name]: value });
    }
    return (

        <div>
            <center>
                <h1 className='about'>Add Movie 🎬 </h1>
            </center>
            <div className='container d-flex justify-content-center align-items-center'>

                <div className=' formm bg-dark '>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputTitle1">Movie Title</label>
                            <input type="text" className="form-control" id="exampleInputTitle1" aria-describedby="emailHelp" placeholder="Movie Title" name='title' value={movie.title} onChange={handleChange} />

                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                            <label htmlFor="exampleInputDate1">Release Date</label>
                            <input type="date" className="form-control" id="exampleInputDate1" name='release_date' value={movie.release_date} onChange={handleChange} />
                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                            <label htmlFor="exampleInputOverview1">Movie Overview</label>
                            <input type="text" className="form-control" id="exampleInputOverviev1" placeholder="Enter Movie Overview" name='overview' value={movie.overview} onChange={handleChange} />
                        </div>
                        <br />
                        <br />
                        <div className="form-group">
                            <label htmlFor="exampleInputImg1">Movie Poster</label>
                            <input type="text" className="form-control" id="exampleInputImg1" placeholder="Enter URL" name='poster_path' value={movie.poster_path} onChange={handleChange} />
                        </div>
                        <br />
                        <br />
                        <button type="submit" class="btn btn-success btnn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AddUser;