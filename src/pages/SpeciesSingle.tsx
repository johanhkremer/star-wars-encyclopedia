import { useEffect, useState } from 'react';
import { StarWarsSpeciesSingle } from '../types/StarWarsAPI.types';
import { getSpeciesSingle } from '../services/StarWarsAPI';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';

const SpeciesSingle = () => {
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false);
    const [speciesSingle, setSpeciesSingle] = useState<StarWarsSpeciesSingle | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchSpeciesSingle = async () => {
            if (id) {
                const speciesSingleIdNumber = parseInt(id);
                if (isNaN(speciesSingleIdNumber)) {
                    setError('Invalid film ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getSpeciesSingle(speciesSingleIdNumber);
                    console.log('Fetched data:', data);
                    setSpeciesSingle(data);
                } catch (error) {
                    console.error('Error fetching film:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchSpeciesSingle();
    }, [id]);

    return (
        <>
            {loading && <LoadingSpinner />}

            {error && <p>Something went wrong: {error}</p>}

            {speciesSingle && (
                <Row className="justify-content-center mt-3 mb-3">
                    <Col xs={12} md={8} lg={10}>
                        <Card className='p-3 d-flex flex-column align-items-center'>
                            <Card.Body>
                                <Card.Title><h1>{speciesSingle.name}</h1></Card.Title>
                                <Card.Text>
                                    <h2>Info:</h2>
                                    <p>Classification: {speciesSingle.classification}</p>
                                    <p>Designation: {speciesSingle.designation}</p>
                                    <p>Average Height: {speciesSingle.average_height}</p>
                                    <p>Average Lifespan: {speciesSingle.average_lifespan}</p>
                                    <p>Eye Colors: {speciesSingle.eye_colors}</p>
                                    <p>Hair Colors: {speciesSingle.hair_colors}</p>
                                    <p>Language: {speciesSingle.language}</p>
                                    <p>Skin Colors: {speciesSingle.skin_colors}</p>
                                </Card.Text>
                                <ListGroup variant="flush">
                                    <h3>Films where species appear:</h3>
                                    {speciesSingle.films.map(film => (
                                        <ListGroup.Item key={film.id}>
                                            <Link to={`/films/${film.id}`}>{film.title}</Link>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                <ListGroup variant="flush">
                                    <h3>Characters:</h3>
                                    {speciesSingle.people.map(person => (
                                        <ListGroup.Item key={person.id}>
                                            <Link to={`/people/${person.id}`}>{person.name}</Link>
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

export default SpeciesSingle;
