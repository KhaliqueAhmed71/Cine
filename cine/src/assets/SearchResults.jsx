  import React, { useEffect, useState } from 'react';
  import { useLocation, Link } from 'react-router-dom';
  import axios from 'axios';

  const API_KEY = 'd5020016';

  const SearchResults = () => {
    const [items, setItems] = useState([]);
    const q = new URLSearchParams(useLocation().search).get('q');

    useEffect(() => {
      if (q) {
        axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${q}`)
          .then(res => setItems(res.data.Search || []));
      }
    }, [q]);

    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans p-6">
        <h2 className="text-xl mb-4">Results for: <span className="font-bold">{q}</span></h2>
        {items.length === 0 ? (
          <p>No results found.</p>
        ) : (
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
        )}
      </div>
    );
  };

  export default SearchResults;
