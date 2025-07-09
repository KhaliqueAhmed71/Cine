import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from './api';
import { useWatchlist } from './WatchListContext';

const MovieDetails = () => {
  const { id } = useParams();
  const [m, setM] = useState(null);
  const { addToWatchlist } = useWatchlist();

  useEffect(() => {
    getMovieDetail(id).then(res => setM(res.data));
  }, [id]);

  if (!m) return <div className="p-6 text-gray-900 dark:text-gray-100">Loading...</div>;
  if (m.Response === 'False') return <div className="p-6 text-gray-900 dark:text-gray-100">Not found.</div>;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{m.Title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={m.Title}
          className="w-full md:w-64 object-cover rounded"
        />
        <div className="flex-1 space-y-2">
          {['Plot','Genre','Released','Runtime','Country','Language','imdbRating','BoxOffice','Awards','Director','Writer','Actors']
            .map(field => <p key={field}><strong>{field}:</strong> {m[field] || 'N/A'}</p>)}
          <button
            onClick={() => addToWatchlist(m)}
            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add to Watchlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
