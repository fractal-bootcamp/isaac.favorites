import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface MovieDetails {
    id: string;
    title: string;
    description: string;
    // Add other relevant properties
}

const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetails | null>(null);

    useEffect(() => {
        // TODO: Fetch movie details based on the id
        // This would typically involve an API call to get movie details
        console.log('Fetching details for movie id:', id);
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
            <p className="mb-4">{movie.description}</p>
            <button className="bg-green-500 text-white p-2 rounded">
                Add to Favorites
            </button>
        </div>
    );
};

export default MovieDetails;