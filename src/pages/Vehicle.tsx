import { useEffect, useState } from 'react';
import { StarWarsVehicle } from '../types/StarWarsAPI.types';
import { getVehicle } from '../services/StarWarsAPI';
import { Card, Col, Figure, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

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
            {loading && <p>Loading...</p>}
            {vehicle && (
                <Row className="justify-content-center mt-3 mb-3">
                    <Col xs={12} md={8} lg={10}>
                        <Card className='p-3 d-flex flex-column align-items-center'>
                            <Card.Body>
                                <Card.Title><h1>{vehicle.name}</h1></Card.Title>
                                <Card.Text>
                                    <h2>Info:</h2>
                                    <p>Model: {vehicle.model}</p>
                                    <p>Manufacturer: {vehicle.manufacturer}</p>
                                    <p>Cost: {vehicle.cost_in_credits} credits</p>
                                    <p>Length: {vehicle.length} meters</p>
                                    <p>Max Atmosphering Speed: {vehicle.max_atmosphering_speed}</p>
                                    <p>Crew: {vehicle.crew}</p>
                                    <p>Passengers: {vehicle.passengers}</p>
                                    <p>Cargo Capacity: {vehicle.cargo_capacity}</p>
                                    <p>Consumables: {vehicle.consumables}</p>
                                    <p>Vehicle Class: {vehicle.vehicle_class}</p>
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <h3>Movies:</h3>
                                    {vehicle.films.map(film => (
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
            {error && <p>Something went wrong: {error}</p>}
        </>
    );
};

export default Vehicle;


