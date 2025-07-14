import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './MovieCard.css';
import { moviesContext } from "../contexts/moviesContextProvider";
const NavBar = () => {
    const { recWord, recWord2 } = useContext(moviesContext)
    const [word, setWord] = useState("")
    const handleChange = (event) => {
        setWord(event.target.value)
        recWord(event.target.value)
    }
    const handleChange2 = (event) => {
        setWord(event.target.value)
        recWord2(event.target.value)
    }
    const location = useLocation();
    const { pathname } = location;
    return (

        <nav className='navbar navbar-expand-md navbar-dark bg-dark p-4 mb-5 fixed-top '>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#x"><span className="navbar-toggler-icon"></span></button>
            <ul id='x' className='navbar-nav collapse navbar-collapse  ms-5  justify-content-between '>
                <li className=" active nav-item active">
                    <Link className="navbar-brand " to='/'><img src="/m.png" alt="Logo" width={80} height={80} /></Link>
                    <span style={{ color: 'white', fontSize: "24px" }}>Wecima</span>
                </li>

                <li className=" active nav-item active">
                    <Link className="nav-link fs-5" to='/'>Home</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-link fs-5" to='/about'>About Us</Link>
                </li>

                <li className="nav-item ">
                    <Link className="nav-link fs-5" to='/movies/add'>Add Movier</Link>
                </li>
                <li className="nav-item ">
                    <form class="d-flex ms-5">
                        <input value={word} onChange={pathname === '/' ? handleChange : handleChange2} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </li>

            </ul>

        </nav>

    );
}

export default NavBar;