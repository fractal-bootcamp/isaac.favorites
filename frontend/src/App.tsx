import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchMovies from './pages/SearchMovies';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites.tsx';

function App() {

  return (
    <Router>
      <nav className="p-4 bg-gray-200">
        <Link to="/" className="mr-4">Search Movies</Link>
        <Link to="/favorites" className="mr-4">Favorites</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<SearchMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;