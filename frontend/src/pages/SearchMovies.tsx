import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Movie {
    id: string;
    title: string;
    year: number;
}

const sampleMovies: Movie[] = [
    { id: '1', title: 'The Shawshank Redemption', year: 1994 },
    { id: '2', title: 'The Godfather', year: 1972 },
    { id: '3', title: 'The Dark Knight', year: 2008 },
    { id: '4', title: 'Pulp Fiction', year: 1994 },
    { id: '5', title: 'Forrest Gump', year: 1994 },
];

const SearchMovies: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [movies, setMovies] = useState<Movie[]>(sampleMovies);

    useEffect(() => {
        handleSearch();
    }, [searchTerm]);

    const handleSearch = () => {
        const filteredMovies = sampleMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setMovies(filteredMovies);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Search Movies</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 mr-2"
                    placeholder="Enter movie title"
                />
            </div>
            <div>
                {movies.map((movie) => (
                    <div key={movie.id} className="mb-2">
                        <Link to={`/movie/${movie.id}`} className="text-blue-500 hover:underline">
                            {movie.title} ({movie.year})
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchMovies;