import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { getPlanet } from '../services/StarWarsAPI';
import { Link, useParams } from 'react-router-dom';
import { StarWarsPlanet } from '../types/StarWarsAPI.types';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Planet = () => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [planet, setPlanet] = useState<StarWarsPlanet | null>(null);
    const { id } = useParams<{ id: string }>();

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
            {loading && <LoadingSpinner />}

            {error && <p>Something went wrong: {error}</p>}

            {planet && (
                <Row className="justify-content-center mt-3 mb-3">
                    <Col xs={12} md={8} lg={10}>
                        <Card className='p-3 d-flex flex-column align-items-center'>
                            <Card.Body>
                                <Card.Title><h1>{planet.name}</h1></Card.Title>
                                <Card.Text>
                                    <h2>Info:</h2>
                                    <p>Climate: {planet.climate}</p>
                                    <p>Diameter: {planet.diameter}</p>
                                    <p>Gravity: {planet.gravity}</p>
                                    <p>Orbital Period: {planet.orbital_period}</p>
                                    <p>Population: {planet.population}</p>
                                    <p>Rotation Period: {planet.rotation_period}</p>
                                    <p>Surface Water: {planet.surface_water}</p>
                                    <p>Terrain: {planet.terrain}</p>
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <h3>Movies:</h3>
                                    {planet.films.map(film => (
                                        <ListGroup.Item key={film.id}>
                                            <Link to={`/films/${film.id}`}>{film.title}</Link>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default Planet;



