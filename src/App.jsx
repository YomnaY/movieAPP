import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.css"
import Home from "./pages/Home";
import About from "./pages/About";
import MovieDetails from "./pages/movieDetails";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import AddMoviePage from "./pages/AddMoviePage";
import MoviesContextProvider from "./contexts/moviesContextProvider";
import './components/MovieCard.css';

function App() {

  return (<div style={{ background: "rgb(214, 209, 209)" }}>
    <MoviesContextProvider>
      <BrowserRouter >

        <NavBar></NavBar>
        <Routes>

          <Route path="/" element={<Movies ></Movies>}></Route>
          <Route path="/movies/add" element={<AddMoviePage ></AddMoviePage>}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>

    </MoviesContextProvider>


  </div>
  );
}


export default App;