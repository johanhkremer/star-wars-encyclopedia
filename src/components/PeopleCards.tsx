import Card from 'react-bootstrap/Card';
import { StarWarsPeople } from '../types/StarWarsAPI.types';
import { Col, Row } from 'react-bootstrap';
import '../assets/styles/scss/peopleCards.scss'

interface PeopleCardsProps {
    people: StarWarsPeople[];
}

const PeopleCards: React.FC<PeopleCardsProps> = ({ people }) => {
    return (
        <Row>
            {people.map((person) => (
                <Col key={person.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body className="d-flex flex-column justify-content-center align-items-center" style={{ height: 'auto', overflow: 'hidden' }}>
                            <Card.Title>{person.name}</Card.Title>
                            <Card.Img
                                variant="top"
                                src={person.image_url}
                                className="img-xs img-sm img-md img-lg"
                                style={{ height: 'auto', objectFit: 'contain', objectPosition: 'top', maxWidth: '100%' }} />
                        </Card.Body>
                        <Card.Link className='mb-3' href={`/people/${person.id}`}>Read more</Card.Link>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default PeopleCards;