import React, { useEffect, useState } from 'react';
import { fetchPopular, searchMovies } from './api';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const t = setTimeout(() => {
      (searchTerm ? searchMovies(searchTerm) : fetchPopular())
        .then(res => setMovies(res.data.Search || []));
    }, 500);
    return () => clearTimeout(t);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-6">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search movies..."
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 mb-6 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map(m => (
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

export default HomePage;
