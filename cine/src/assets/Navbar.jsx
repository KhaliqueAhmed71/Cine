import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'dark');
  const navigate = useNavigate();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.theme = theme;
  }, [theme]);

  return (
    <nav className="flex justify-between items-center px-6 py-3 shadow bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white font-sans">
      
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-300">🎬 CineScope</Link>
        <Link to="/" className="hover:text-indigo-600 dark:hover:text-indigo-300">Home</Link>
        <Link to="/movies" className="hover:text-indigo-600 dark:hover:text-indigo-300">Movies</Link>
        <Link to="/tv" className="hover:text-indigo-600 dark:hover:text-indigo-300">TV Shows</Link>
        <Link to="/people" className="hover:text-indigo-600 dark:hover:text-indigo-300">People</Link>
      </div>

      
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
              navigate(`/search?q=${encodeURIComponent(e.target.value.trim())}`);
            }
          }}
        />

<Link to="/watchlist" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600 hover:opacity-80">
  <img
    className="w-5 h-5"
    src="data:image/png;base64,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"
    alt="Bookmark"
  />
</Link>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:opacity-80">
          <img src="data:image/png;base64,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" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
