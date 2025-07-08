import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from './WatchListContext';

const WatchList = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>My Watchlist</h2>

      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
          {watchlist.map((movie) => (
            <div key={movie.imdbID} style={{ backgroundColor: '#2e2e2e', padding: '10px', borderRadius: '8px' }}>
              <Link to={`/movie/${movie.imdbID}`}>
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                  alt={movie.Title}
                  style={{ width: '100%', borderRadius: '4px' }}
                />
                <p style={{ marginTop: '10px', textAlign: 'center' }}>{movie.Title}</p>
              </Link>
              <button
                onClick={() => removeFromWatchlist(movie.imdbID)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#e63946',
                  color: '#fff',
                  padding: '6px',
                  border: 'none',
                  borderRadius: '4px',
                  width: '100%',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
