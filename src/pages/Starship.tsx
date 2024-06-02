import { useEffect, useState } from 'react';
import { StarWarsStarship } from '../types/StarWarsAPI.types';
import { getStarship } from '../services/StarWarsAPI';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Starship = () => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [starship, setStarship] = useState<StarWarsStarship | null>(null);

    useEffect(() => {
        const fetchStarship = async () => {
            if (id) {
                const starshipIdNumber = parseInt(id);
                if (isNaN(starshipIdNumber)) {
                    setError('Invalid starship ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getStarship(starshipIdNumber);
                    console.log('Fetched data:', data);
                    setStarship(data);
                } catch (error) {
                    console.error('Error fetching starship:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchStarship();
    }, [id]);

    return (
        <>
            <div>Starship</div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}
            {starship && (
                <Figure>
                    <Figure.Caption>
                        <strong>Name:</strong> {starship.name}<br />
                        <strong>Model:</strong> {starship.model}<br />
                        <strong>Manufacturer:</strong> {starship.manufacturer}<br />
                        <strong>Cost:</strong> {starship.cost_in_credits} credits<br />
                        <strong>Length:</strong> {starship.length} meters<br />
                        <strong>Max Atmosphering Speed:</strong> {starship.max_atmosphering_speed}<br />
                        <strong>Crew:</strong> {starship.crew}<br />
                        <strong>Passengers:</strong> {starship.passengers}<br />
                        <strong>Cargo Capacity:</strong> {starship.cargo_capacity}<br />
                        <strong>Consumables:</strong> {starship.consumables}<br />
                        <strong>Hyperdrive Rating:</strong> {starship.hyperdrive_rating}<br />
                        <strong>MGLT:</strong> {starship.MGLT}<br />
                        <strong>Movies:</strong>
                        <ul>
                            {starship.films.map(film => (
                                <li key={film.id}>{film.title}</li>
                            ))}
                        </ul>
                    </Figure.Caption>
                </Figure>
            )}
        </>
    );
};

export default Starship;
