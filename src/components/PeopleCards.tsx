import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { StarWarsPeople } from '../types/StarWarsAPI.types';
import { Col, Row } from 'react-bootstrap';

interface PeopleCardsProps {
    people: StarWarsPeople[];
}

const PeopleCards: React.FC<PeopleCardsProps> = ({ people }) => {
    return (
        <Row>
            {people.map((person) => (
                <Col key={person.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body style={{ height: 'auto', overflow: 'hidden' }}>
                            <Card.Title>{person.name}</Card.Title>
                            <Card.Img
                                variant="top"
                                src={person.image_url}
                                style={{ height: 'auto', objectFit: 'cover' }} />
                            <Card.Text>
                                Birth Year: {person.birth_year}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Height: {person.height}</ListGroup.Item>
                            <ListGroup.Item>Mass: {person.mass}</ListGroup.Item>
                            <ListGroup.Item>Gender: {person.hair_color}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={`/people/${person.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default PeopleCards;
