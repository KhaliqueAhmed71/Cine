import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from './api';
import { useWatchlist } from './WatchListContext';

const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const { addToWatchlist } = useWatchlist();

  useEffect(() => {
    getMovieDetail(id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <div style={{ padding: '20px' }}>Loading...</div>;
  if (movie.Response === 'False') return <div style={{ padding: '20px' }}>Movie not found.</div>;

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif', color: '#eee', backgroundColor: '#1a1a1a' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>

        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={movie.Title}
          style={{ width: '300px', borderRadius: '8px', objectFit: 'cover' }}
        />

        <div style={{ flex: 1, minWidth: '250px' }}>
          <h1 style={{ marginBottom: '10px', color: '#e63946' }}>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p style={{ marginTop: '16px' }}><strong>Plot:</strong> {movie.Plot}</p>

          <button
            onClick={() => addToWatchlist(movie)}
            style={{
              marginTop: '24px',
              backgroundColor: '#e63946',
              color: '#fff',
              padding: '10px 16px',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
