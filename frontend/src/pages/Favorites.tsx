import React from 'react';

interface Movie {
    id: number;
    title: string;
}

const Favorites: React.FC = () => {
    const favorites: Movie[] = []; // This would be replaced with actual data

    return (
        <div>
            <h1>Your Favorites</h1>
            <ul>
                {favorites.map(movie => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Favorites;