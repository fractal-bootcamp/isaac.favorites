import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchMovies: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [movies, setMovies] = useState([]);

    const backendUrl = 'http://localhost:3001/movielist'; // Your local backend URL

    async function getMovies() {
        const response = await axios.get(backendUrl) // pass the searchTerm to the backend somehow
        console.log("this worked!");
        console.log(response.data); // Use response.data to simplify it
        setMovies(response.data)
    }

    useEffect(function () {
        getMovies()
    }, [searchTerm])

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2"
            />
            <ul> {/* note for self, study this syntax, it's really import */}
                {movies.map((movie, index) => (
                    <li key={index}>{movie.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchMovies;
