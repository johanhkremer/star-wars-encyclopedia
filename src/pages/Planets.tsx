import { getPlanets } from '../services/StarWarsAPI';
import { StarWarsPlanets } from '../types/StarWarsAPI.types';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import PlanetCards from '../components/PlanetsCards';
import Search from '../components/Search';

const Planets = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [planetsResults, setPlanetsResults] = useState<StarWarsPlanets[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        fetchPlanets('', page);
    }, [page]);

    const fetchPlanets = async (search: string, page: number) => {
        setLoading(true);
        try {
            const data = await getPlanets(search, page);
            console.log('Fetched data:', data); // Debugging line
            setPlanetsResults(data.data);
            setTotalPages(data.last_page);
        } catch (error) {
            console.error('Error fetching planets:', error); // Debugging line
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
        await fetchPlanets(search, 1);
    };

    return (
        <>
            <h1>Planets</h1>
            <Search searchFunction={handleSearch} onSearchResults={setPlanetsResults} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && planetsResults.length > 0 && (
                <PlanetCards planets={planetsResults} />
            )}
            {!loading && !error && planetsResults.length === 0 && (
                <p>No planets found.</p>
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

export default Planets;