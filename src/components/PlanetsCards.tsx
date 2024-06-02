import { Col, Row } from 'react-bootstrap';
import { StarWarsPlanets } from '../types/StarWarsAPI.types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface PlanetsCardsProps {
    planets: StarWarsPlanets[];
}

const PlanetsCards: React.FC<PlanetsCardsProps> = ({ planets }) => {
    return (
        <Row>
            {planets.map((planet) => (
                <Col key={planet.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body style={{ height: 'auto', overflow: 'hidden' }}>
                            <Card.Title>{planet.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Size: {planet.diameter} km</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={`/planets/${planet.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default PlanetsCards;