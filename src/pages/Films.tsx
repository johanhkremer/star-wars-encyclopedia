import { getFilms } from '../services/StarWarsAPI';
import { StarWarsFilms } from '../types/StarWarsAPI.types';
import { useState, useEffect } from 'react';
import FilmCards from '../components/FilmCards';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

const Films = () => {
    const [error, setError] = useState<string | null>(null);
    const [filmsResults, setFilmsResults] = useState<StarWarsFilms[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetchFilms('', page);
    }, [page]);

    const fetchFilms = async (search: string, page: number) => {
        setLoading(true);
        try {
            const data = await getFilms(search, page);
            console.log('Fetched data:', data); // Debugging line
            setFilmsResults(data.data);
            setTotalPages(data.last_page);
        } catch (error) {
            console.error('Error fetching films:', error); // Debugging line
            if (error instanceof Error) {
                setError(error.message || 'An error occurred');
            } else {
                setError('An unexpected error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (search: string) => {
        setPage(1); // Reset to the first page for new searches
        await fetchFilms(search, 1);
    };

    return (
        <>
            <h1>Films</h1>
            <Search searchFunction={handleSearch} onSearchResults={setFilmsResults} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && filmsResults.length > 0 && (
                <FilmCards films={filmsResults} />
            )}
            {!loading && !error && filmsResults.length === 0 && (
                <p>No films found.</p>
            )}

            {!loading && !error && totalPages > 1 && (
                <Pagination
                    hasPreviousPage={page > 1}
                    hasNextPage={page < totalPages}
                    onNextPage={() => setPage(prevPage => prevPage + 1)}
                    onPreviousPage={() => setPage(prevPage => prevPage - 1)}
                    page={page}
                    totalPages={totalPages}
                />
            )}
        </>
    );
};

export default Films;

