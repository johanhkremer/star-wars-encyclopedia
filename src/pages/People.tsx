import { getPeople } from '../services/StarWarsAPI';
import { StarWarsPeople } from '../types/StarWarsAPI.types';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import PeopleCards from '../components/PeopleCards';
import Search from '../components/search';
import LoadingSpinner from '../components/LoadingSpinner';

const People = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [peopleResults, setPeopleResults] = useState<StarWarsPeople[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetchPeople('', page);
    }, [page]);

    const fetchPeople = async (search: string, page: number) => {
        setLoading(true);
        try {
            const data = await getPeople(search, page);
            console.log('Fetched data:', data); // Debugging line
            setPeopleResults(data.data);
            setTotalPages(data.last_page);
        } catch (error) {
            console.error('Error fetching people:', error); // Debugging line
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
        await fetchPeople(search, 1);
    };

    return (
        <>

            <h1>People</h1>
            <Search searchFunction={handleSearch} onSearchResults={setPeopleResults} />
            {loading && <LoadingSpinner />}
            {error && <p>Error: {error}</p>}
            {!loading && !error && peopleResults.length > 0 && (
                <PeopleCards people={peopleResults} />
            )}
            {!loading && !error && peopleResults.length === 0 && (
                <p>No people found.</p>
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

export default People;