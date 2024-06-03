import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { getStarship } from '../services/StarWarsAPI';
import { Link, useParams } from 'react-router-dom';
import { StarWarsStarship } from '../types/StarWarsAPI.types';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Starship = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [starship, setStarship] = useState<StarWarsStarship | null>(null);
    const { id } = useParams<{ id: string }>();

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
            {loading && <LoadingSpinner />}

            {error && <p>Something went wrong: {error}</p>}

            {starship && (
                <Row className="justify-content-center mt-3 mb-3">
                    <Col xs={12} md={8} lg={10}>
                        <Card className='p-3 d-flex flex-column align-items-center'>
                            <Card.Body>
                                <Card.Title><h1>{starship.name}</h1></Card.Title>
                                <Card.Text>
                                    <h2>Info:</h2>
                                    <p>Model: {starship.model}</p>
                                    <p>Manufacturer: {starship.manufacturer}</p>
                                    <p>Cost: {starship.cost_in_credits} credits</p>
                                    <p>Length: {starship.length} meters</p>
                                    <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
                                    <p>Crew: {starship.crew}</p>
                                    <p>Passengers: {starship.passengers}</p>
                                    <p>Cargo Capacity: {starship.cargo_capacity}</p>
                                    <p>Consumables: {starship.consumables}</p>
                                    <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
                                    <p>MGLT: {starship.MGLT}</p>
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <h3>Movies:</h3>
                                    {starship.films.map(film => (
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

export default Starship;


