import { getVehicles } from '../services/StarWarsAPI';
import { StarWarsVehicles } from '../types/StarWarsAPI.types';
import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import VehiclesCards from '../components/VehiclesCards';

const Vehicles = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [vehiclesResults, setVehiclesResults] = useState<StarWarsVehicles[]>([]);

    useEffect(() => {
        fetchVehicles('', page);
    }, [page]);

    const fetchVehicles = async (search: string, page: number) => {
        setLoading(true);
        try {
            const data = await getVehicles(search, page);
            console.log('Fetched data:', data); // Debugging line
            setVehiclesResults(data.data);
            setTotalPages(data.last_page);
        } catch (error) {
            console.error('Error fetching vehicles:', error); // Debugging line
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
        await fetchVehicles(search, 1);
    };

    return (
        <>
            <h1>Vehicles</h1>
            <Search searchFunction={handleSearch} onSearchResults={setVehiclesResults} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && vehiclesResults.length > 0 && (
                <VehiclesCards vehicles={vehiclesResults} />
            )}
            {!loading && !error && vehiclesResults.length === 0 && (
                <p>No vehicles found.</p>
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

export default Vehicles;