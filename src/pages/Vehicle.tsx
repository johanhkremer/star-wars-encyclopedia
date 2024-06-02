import { useEffect, useState } from 'react';
import { StarWarsVehicle } from '../types/StarWarsAPI.types';
import { getVehicle } from '../services/StarWarsAPI';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Vehicle = () => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [vehicle, setVehicle] = useState<StarWarsVehicle | null>(null);

    useEffect(() => {
        const fetchVehicle = async () => {
            if (id) {
                const vehicleIdNumber = parseInt(id);
                if (isNaN(vehicleIdNumber)) {
                    setError('Invalid vehicle ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getVehicle(vehicleIdNumber);
                    console.log('Fetched data:', data);
                    setVehicle(data);
                } catch (error) {
                    console.error('Error fetching vehicle:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchVehicle();
    }, [id]);

    return (
        <>
            <div>Vehicle</div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}
            {vehicle && (
                <Figure>
                    <Figure.Caption>
                        <strong>Name:</strong> {vehicle.name}<br />
                        <strong>Model:</strong> {vehicle.model}<br />
                        <strong>Manufacturer:</strong> {vehicle.manufacturer}<br />
                        <strong>Cost:</strong> {vehicle.cost_in_credits} credits<br />
                        <strong>Length:</strong> {vehicle.length} meters<br />
                        <strong>Max Atmosphering Speed:</strong> {vehicle.max_atmosphering_speed}<br />
                        <strong>Crew:</strong> {vehicle.crew}<br />
                        <strong>Passengers:</strong> {vehicle.passengers}<br />
                        <strong>Cargo Capacity:</strong> {vehicle.cargo_capacity}<br />
                        <strong>Consumables:</strong> {vehicle.consumables}<br />
                        <strong>Vehicle Class:</strong> {vehicle.vehicle_class}<br />
                        <strong>Movies:</strong>
                        <ul>
                            {vehicle.films.map(film => (
                                <li key={film.id}>{film.title}</li>
                            ))}
                        </ul>
                    </Figure.Caption>
                </Figure>
            )}
        </>
    );
};

export default Vehicle;
