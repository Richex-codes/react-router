import "./App.css";
import movie from "./movie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Trailer from "./components/trailer";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const [title, setTitle] = useState(null);
  const [rating, setRating] = useState(null);
  const [movies, setMovies] = useState(movie);
  const [titles, setTitles] = useState(null);
  const [ratings, setRatings] = useState(null);

  const { id } = useParams();

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleRating = (e) => {
    e.preventDefault();
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    movie.push({
      title: title,
      rating: rating,
    });
    setTitle(null);
    setRating(null);
    console.log(movie);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const filtered = movie.filter(
      (m) => m.title === titles && m.rating === ratings
    );
    setMovies(filtered);
  };

  const handleTitles = (e) => {
    e.preventDefault();
    setTitles(e.target.value);
  };

  const handleRatings = (e) => {
    e.preventDefault();
    setRatings(e.target.value);
  };

  const styles = {
    textAlign: "center",
    color: "red",
    fontSize: "30px",
    fontWeight: "bold",
    padding: "10px 30px",
    margin: "10px",
    border: "1px solid black",
    borderRadius: "10px",
    cursor: "pointer",
    textDecoration: "none",
    backgroundColor: "lightblue",
  };

  return (
    <div>
      <Link to="/" style={styles}>
        Welcome to Richflix
      </Link>
      <Link to="/movies" style={styles}>Movies</Link>
      <Routes>
        <Route path="/" index />
        <Route
          path="/movies"
          element={
            <div>
              <Filter
                handleSubmit={handleClick}
                handleRating={handleRatings}
                handleTitle={handleTitles}
              ></Filter>
              <MovieList movie={movies} />
              <div className="form">
                <input
                  className="input"
                  onChange={handleTitle}
                  type="text"
                  name="title"
                  placeholder="title:"
                />
                <input
                  className="input"
                  onChange={handleRating}
                  type="text"
                  name="rating"
                  placeholder="rating:"
                />
                <button
                  onClick={title ? handleSubmit : ""}
                  on
                  type="submit"
                  style={{ backgroundColor: "lightblue", border: "none" }}
                >
                  Submit
                </button>
              </div>
            </div>
          }
        />
        <Route path="/movies/:id" element={<Trailer></Trailer>} />
        <Route path="/movies/*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
