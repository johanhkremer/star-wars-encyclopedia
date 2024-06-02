import { Figure, Card, Col, Row } from 'react-bootstrap';
import { getFilm } from '../services/StarWarsAPI';
import { Link, useParams } from 'react-router-dom';
import { StarWarsFilm } from '../types/StarWarsAPI.types';
import { useEffect, useState } from 'react';

const Film = () => {
    const [error, setError] = useState<string | null>(null)
    const [film, setFilm] = useState<StarWarsFilm | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchFilm = async () => {
            if (id) {
                const filmIdNumber = parseInt(id);
                if (isNaN(filmIdNumber)) {
                    setError('Invalid film ID');
                    setLoading(false);
                    return;
                }
                try {
                    setLoading(true);
                    const data = await getFilm(filmIdNumber);
                    console.log('Fetched data:', data);
                    setFilm(data);
                } catch (error) {
                    console.error('Error fetching film:', error);
                    setError('An error occurred');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchFilm();
    }, [id]);

    return (
        <>
            {film && (
                <Row className="justify-content-center mt-3 mb-3">
                    <Col xs={12} md={8} lg={10}>
                        <Card className='d-flex flex-column align-items-center'>
                            <h1>{film.title}</h1>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src={film.image_url}
                                />
                            </Figure>
                            <Card.Body>
                                <strong>Director:</strong> {film.director}<br />
                                <strong>Producer:</strong> {film.producer}<br />
                                <strong>Release Date:</strong> {film.release_date}<br />
                                <div>
                                    <p>{film.opening_crawl}</p>
                                </div>
                                <ul>
                                    <strong>Characters:</strong>
                                    {film.characters.map(character => (
                                        <li key={character.id}>
                                            <Link to={`/people/${character.id}`}>{character.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    <strong>Planets:</strong>
                                    {film.planets.map(planet => (
                                        <li key={planet.id}>
                                            <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    <strong>Starships:</strong>
                                    {film.starships.map(starship => (
                                        <li key={starship.id}>
                                            <Link to={`/starships/${starship.id}`}>{starship.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    <strong>Vehicles:</strong>
                                    {film.vehicles.map(vehicle => (
                                        <li key={vehicle.id}>
                                            <Link to={`/vehicles/${vehicle.id}`}>{vehicle.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul>
                                    <strong>Species:</strong>
                                    {film.species.map(species => (
                                        <li key={species.id}>
                                            <Link to={`/species/${species.id}`}>{species.name}</Link>
                                        </li>
                                    ))}
                                </ul>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong: {error}</p>}
        </>
    );
};

export default Film;



