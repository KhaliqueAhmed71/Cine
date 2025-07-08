import React, { useEffect, useState } from 'react';
import { fetchPopular, searchMovies } from './api';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        searchMovies(searchTerm).then((res) => {
          setMovies(res.data.Search || []);
        });
      } else {
        fetchPopular().then((res) => {
          setMovies(res.data.Search || []);
        });
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="home-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {movies.length === 0 ? (
        <p className="no-movies">No movies found.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`} className="movie-link">
              <div className="movie-card">
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                  alt={movie.Title}
                />
                <p className="movie-title">{movie.Title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
