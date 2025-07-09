import React, { useEffect, useState } from 'react';
import { searchMovies } from './api';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    searchMovies('The House').then(res => setItems(res.data.Search || []));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-6">
      <h1 className="text-2xl font-semibold mb-6">Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map(m => (
          <Link key={m.imdbID} to={`/movie/${m.imdbID}`}>
            <div className="bg-gray-200 dark:bg-gray-800 hover:shadow-lg hover:scale-105 transition transform rounded-lg overflow-hidden">
              <img
                src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}
                alt={m.Title}
                className="w-full h-64 object-cover"
              />
              <p className="p-2 text-center">{m.Title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
