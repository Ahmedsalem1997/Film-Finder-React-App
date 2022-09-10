import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("batman");

  const API_URL = "https://www.omdbapi.com?apikey=87d4d6c3";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchTerm)
  }

  return (
    <div className="app">
      <div className="mx-auto">
        <h1 className="text-5xl font-bold text-center my-8">Film Finder App</h1>
        <div className="form-control">
          <div className="relative w-3/4 md:w-1/2 mx-auto">
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input w-full pr-40 bg-gray-200 input-lg text-black rounded-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => {setSearchTerm(e.target.value)}}
            />
            <button
              type="submit"
              className="absolute top-0 right-0 rounded-none w-28 md:w-36 btn btn-lg"
              onClick={() => searchMovies(searchTerm)}
            >
              go
            </button>

            </form>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto my-10 px-6 text-white-900 md:px-0">
        {movies?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-4">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID}/>
            ))}
          </div>
        ) : (
          <p className="text-center text-white my-10 mx-auto">No Movies Yet...</p>
        )}
      </div>
    </div>
  );
}

export default App;
