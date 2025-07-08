import React, { useEffect, useState } from 'react';
import { searchSeries } from './api';
import { Link } from 'react-router-dom';
import './Movies.css'; 

const TVShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    searchSeries('Breaking Bad').then((res) => {
      setShows(res.data.Search || []);
    });
  }, []);

  return (
    <div className="home-container">
      <h1 style={{ marginBottom: '20px' }}>TV Shows</h1>

      <div className="movies-grid">
        {shows.map((show) => (
          <Link key={show.imdbID} to={`/movie/${show.imdbID}`} className="movie-link">
            <div className="movie-card">
              <img
                src={
                  show.Poster !== 'N/A'
                    ? show.Poster
                    : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={show.Title}
              />
              <p className="movie-title">{show.Title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
