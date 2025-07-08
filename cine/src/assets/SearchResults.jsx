import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import './Movies.css'; 

const API_KEY = 'd5020016';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    if (query) {
      axios
        .get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        .then((res) => {
          setResults(res.data.Search || []);
        })
        .catch((err) => console.error(err));
    }
  }, [query]);

  return (
    <div className="home-container">
      <h2>Search results for: <strong>{query}</strong></h2>

      {results.length === 0 ? (
        <p className="no-movies">No results found.</p>
      ) : (
        <div className="movies-grid" style={{ marginTop: '20px' }}>
          {results.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-link">
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

export default SearchResults;
