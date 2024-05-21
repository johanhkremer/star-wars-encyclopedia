import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { StarWarsFilms } from '../types/StarWarsAPI.Films.types';
import { Col, Row } from 'react-bootstrap';

interface FilmCardsProps {
    films: StarWarsFilms[];
}

const FilmCards: React.FC<FilmCardsProps> = ({ films }) => {
    return (
        <Row>
            {films.map((film) => (
                <Col key={film.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={film.image_url} />
                        <Card.Body>
                            <Card.Title>{film.title}</Card.Title>
                            <Card.Text>
                                {film.opening_crawl}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Director: {film.director}</ListGroup.Item>
                            <ListGroup.Item>Producer: {film.producer}</ListGroup.Item>
                            <ListGroup.Item>Release date: {film.release_date}</ListGroup.Item>
                            <ListGroup.Item>Characters: {film.characters_count}</ListGroup.Item>
                            <ListGroup.Item>Planets: {film.planets_count}</ListGroup.Item>
                            <ListGroup.Item>Starships: {film.starships_count}</ListGroup.Item>
                            <ListGroup.Item>Vehicles: {film.vehicles_count}</ListGroup.Item>
                            <ListGroup.Item>Species: {film.species_count}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default FilmCards;