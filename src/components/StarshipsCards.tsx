import { Col, Row } from 'react-bootstrap';
import { StarWarsStarships } from '../types/StarWarsAPI.types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface StarshipsCardsProps {
    starships: StarWarsStarships[];
}

const StarshipsCards: React.FC<StarshipsCardsProps> = ({ starships }) => {
    return (
        <Row>
            {starships.map((starship) => (
                <Col key={starship.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body style={{ height: 'auto', overflow: 'hidden' }}>
                            <Card.Title>{starship.name}</Card.Title>
                            <Card.Text>
                                {starship.model}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Manufacturer: {starship.manufacturer}</ListGroup.Item>
                            <ListGroup.Item>Starship Class: {starship.starship_class}</ListGroup.Item>
                            <ListGroup.Item>Crew: {starship.crew}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={`/starships/${starship.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default StarshipsCards;