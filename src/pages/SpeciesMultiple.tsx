import { getSpecies } from '../services/StarWarsAPI';
import { StarWarsSpeciesMuliple } from '../types/StarWarsAPI.types';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import SpeciesCards from '../components/SpeciesCards';

const Species = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [speciesResults, setSpeciesResults] = useState<StarWarsSpeciesMuliple[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetchSpecies('', page);
    }, [page]);

    const fetchSpecies = async (search: string, page: number) => {
        setLoading(true);
        try {
            const data = await getSpecies(search, page);
            console.log('Fetched data:', data); // Debugging line
            setSpeciesResults(data.data);
            setTotalPages(data.last_page);
        } catch (error) {
            console.error('Error fetching species:', error); // Debugging line
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
        await fetchSpecies(search, 1);
    };

    return (
        <>
            <h1>Species</h1>
            <Search searchFunction={handleSearch} onSearchResults={setSpeciesResults} />
            {loading && <p>Loading species...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && speciesResults.length > 0 && (
                <SpeciesCards species={speciesResults} />
            )}
            {!loading && !error && speciesResults.length === 0 && (
                <p>No species found.</p>
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

export default Species;