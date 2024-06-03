import { Figure, Card, Col, Row } from 'react-bootstrap';
import { getPerson } from '../services/StarWarsAPI';
import { Link, useParams } from 'react-router-dom';
import { StarWarsPerson } from '../types/StarWarsAPI.types';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const Person = () => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [person, setPerson] = useState<StarWarsPerson | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchPerson = async () => {
            if (id) {
                const personIdNumber = parseInt(id);
                if (isNaN(personIdNumber)) {
                    setError('Invalid film ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getPerson(personIdNumber);
                    console.log('Fetched data:', data);
                    setPerson(data);
                } catch (error) {
                    console.error('Error fetching film:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchPerson();
    }, [id]);

    return (
        <>
            {loading && <LoadingSpinner />}

            {error && <p>Something went wrong: {error}</p>}

            {person && (

                <Row className="justify-content-center mt-3 mb-3">
                    <Col xs={12} md={8} lg={10}>
                        <Card className="p-3">
                            <Card.Body>
                                <Figure className='d-flex flex-column align-items-center'>
                                    <h1>{person.name}</h1>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt="171x180"
                                        src={person.image_url}
                                    />
                                    <Figure.Caption className=''>
                                        <strong>Info:</strong>
                                        <p>Birth year: {person.birth_year}</p>
                                        <p>Eye color: {person.eye_color}</p>
                                        <p>Hair color: {person.hair_color}</p>
                                        <p>Hight: {person.height}</p>
                                        <p>Size: {person.mass}</p>
                                        <p>Skin: {person.skin_color}</p>
                                    </Figure.Caption>
                                    <ul>
                                        <strong>Films:</strong>
                                        {person.films.map(film => (
                                            <li key={film.id}>
                                                <Link to={`/films/${film.id}`}>{film.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    {person.vehicles.length > 0 && (
                                        <ul>
                                            <strong>Vehicles:</strong>
                                            {person.vehicles.map(vehicle => (
                                                <li key={vehicle.id}>
                                                    <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {person.starships.length > 0 && (
                                        <ul>
                                            <strong>Starships:</strong>
                                            {person.starships.map(starship => (
                                                <li key={starship.id}>
                                                    <Link to={`/starships/${starship.id}`}>{starship.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Figure>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            )}
        </>
    );
};

export default Person;

