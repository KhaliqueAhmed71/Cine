import React from 'react';
import { Link } from 'react-router-dom';
import { useWatchlist } from './WatchListContext';

const WatchList = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-6">
      <h2 className="text-2xl mb-6">My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {watchlist.map(m => (
            <div key={m.imdbID} className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
              <Link to={`/movie/${m.imdbID}`}>
                <img
                  src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                  alt={m.Title}
                  className="w-full h-64 object-cover"
                />
                <p className="p-2 text-center">{m.Title}</p>
              </Link>
              <button
                onClick={() => removeFromWatchlist(m.imdbID)}
                className="w-full py-2 bg-indigo-600 text-white hover:bg-indigo-700"
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
