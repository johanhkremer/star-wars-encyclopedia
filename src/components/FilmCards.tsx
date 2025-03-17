import { Col, Row } from 'react-bootstrap';
import { StarWarsFilms } from '../types/StarWarsAPI.types';
import Card from 'react-bootstrap/Card';

interface FilmCardsProps {
    films: StarWarsFilms[];
}

const FilmCards: React.FC<FilmCardsProps> = ({ films }) => {
    return (
        <Row>
            {films.map((film) => (
                <Col key={film.id} xs={12} sm={6} md={4} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Img
                            variant="top"
                            src={film.image_url}
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                        <Card.Body style={{ height: 'auto', overflow: 'hidden' }}>
                            <Card.Title className=''>{film.title}</Card.Title>
                            <Card.Link href={`/films/${film.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default FilmCards;