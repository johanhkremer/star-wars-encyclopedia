import { useState, useEffect } from 'react';
import { getStarships } from '../services/StarWarsAPI';
import { StarWarsStarships } from '../types/StarWarsAPI.types';
import StarshipsCards from '../components/StarshipsCards';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

const Starships = () => {
    const [error, setError] = useState<string | null>(null);
    const [starshipsResults, setStarshipsResults] = useState<StarWarsStarships[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetchStarships('', page);
    }, [page]);

    const fetchStarships = async (search: string, page: number) => {
        setLoading(true);
        try {
            const data = await getStarships(search, page);
            console.log('Fetched data:', data); // Debugging line
            setStarshipsResults(data.data);
            setTotalPages(data.last_page);
        } catch (error) {
            console.error('Error fetching starships:', error); // Debugging line
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
        await fetchStarships(search, 1);
    };

    return (
        <>
            <h1>Starships</h1>
            <Search searchFunction={handleSearch} onSearchResults={setStarshipsResults} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && starshipsResults.length > 0 && (
                <StarshipsCards starships={starshipsResults} />
            )}
            {!loading && !error && starshipsResults.length === 0 && (
                <p>No starships found.</p>
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

export default Starships;