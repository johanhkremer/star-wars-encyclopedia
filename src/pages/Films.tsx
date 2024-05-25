import { useState, useEffect } from 'react';
import { getFilms, getFilmSearch } from '../services/StarWarsAPI';
import { StarWarsFilms } from '../types/StarWarsAPI.types';
import FilmCards from '../components/FilmCards';
import Search from '../components/Search';

const Films = () => {
    const [error, setError] = useState<string | null>(null);
    const [filmsResults, setFilmsResults] = useState<StarWarsFilms[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getFilms()
            .then((data) => {
                console.log('Fetched data:', data); // Debugging line
                if (Array.isArray(data)) {
                    setFilmsResults(data);
                } else {
                    throw new Error('Data format is incorrect');
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching films:', error); // Debugging line
                setError(error.message || 'An error occurred');
                setLoading(false);
            });
    }, []);

    const handleSearchResults = (results: StarWarsFilms[]) => {
        setFilmsResults(results);
    };

    return (
        <>
            <h1>Films</h1>
            <Search searchFunction={getFilmSearch} onSearchResults={handleSearchResults} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && filmsResults.length > 0 && (
                <FilmCards films={filmsResults} />
            )}
            {!loading && !error && filmsResults.length === 0 && (
                <p>No films found.</p>
            )}
        </>
    );
};

export default Films;
