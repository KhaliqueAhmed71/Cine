import React, { useEffect, useState } from 'react';
import { searchMovies } from './api';
import { Link } from 'react-router-dom';
import './Movies.css'

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Avengers').then((res) => {
      setMovies(res.data.Search || []);
    });
  }, []);

  return (
    <div className="movies-container">
      <h1 className="movies-heading">Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`} className="movie-link">
            <div className="movie-card">
              <img
                src={
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={movie.Title}
              />
              <p className="movie-title">{movie.Title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
