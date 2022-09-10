import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="group item">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
        className="hidden w-full duration-200 md:block group-hover:scale-110"
      />
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
        className="w-full md:hidden"
      />
      <div className="item-gradient"></div>
      <h5>
        {movie.Title} ({movie.Year})
      </h5>
    </div>
  );
};

export default MovieCard;
