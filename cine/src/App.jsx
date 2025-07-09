import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './assets/HomePage';
import MovieDetails from './assets/MovieDetails';
import WatchList from './assets/WatchList';
import Navbar from './assets/Navbar';
import Movies from './assets/Movies';
import TVShows from './assets/TVShows';
import SearchResults from './assets/SearchResults';
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </div>
  );
};

export default App;
