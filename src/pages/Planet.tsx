import { useEffect, useState } from 'react';
import { StarWarsPlanet } from '../types/StarWarsAPI.types';
import { getPlanet } from '../services/StarWarsAPI';
import { Figure } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Planet = () => {
    const { id } = useParams<{ id: string }>();
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [planet, setPlanet] = useState<StarWarsPlanet | null>(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            if (id) {
                const planetIdNumber = parseInt(id);
                if (isNaN(planetIdNumber)) {
                    setError('Invalid film ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getPlanet(planetIdNumber);
                    console.log('Fetched data:', data);
                    setPlanet(data);
                } catch (error) {
                    console.error('Error fetching film:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPlanet();
    }, [id]);

    return (
        <>
            <div>Planet</div>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}

            {planet && (
                <Figure>
                    <Figure.Caption>
                        {planet.name},
                        <strong>Movies:</strong>
                        <ul>
                            {planet.films.map(films => (
                                <li key={films.id}>{films.title}</li>
                            ))}
                        </ul>
                    </Figure.Caption>
                </Figure>
            )}
        </>
    );
};

export default Planet;
