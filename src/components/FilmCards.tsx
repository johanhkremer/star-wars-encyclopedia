import Card from 'react-bootstrap/Card';
import { StarWarsFilms } from '../types/StarWarsAPI.types';
import { Col, Row } from 'react-bootstrap';

interface FilmCardsProps {
    films: StarWarsFilms[];
}

const FilmCards: React.FC<FilmCardsProps> = ({ films }) => {
    return (
        <Row>
            {films.map((film) => (
                <Col key={film.id} xs={12} sm={6} md={4} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Title className='p-3'>{film.title}</Card.Title>
                        <Card.Img
                            variant="top"
                            src={film.image_url}
                            style={{ height: 'auto', objectFit: 'cover' }} />
                        <Card.Body style={{ height: 'auto', overflow: 'hidden' }}>

                            <Card.Text>
                                {film.release_date}
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href={`/films/${film.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default FilmCards;