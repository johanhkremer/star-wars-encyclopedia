import '../assets/styles/scss/peopleCards.scss'
import { Col, Row } from 'react-bootstrap';
import { StarWarsPeople } from '../types/StarWarsAPI.types';
import Card from 'react-bootstrap/Card';

interface PeopleCardsProps {
    people: StarWarsPeople[];
}

const PeopleCards: React.FC<PeopleCardsProps> = ({ people }) => {
    return (
        <Row>
            {people.map((person) => (
                <Col key={person.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Img
                            variant="top"
                            src={person.image_url}
                            style={{
                                width: '100%',
                                height: '300px',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}
                        />
                        <Card.Body className="">
                            <Card.Title>{person.name}</Card.Title>
                            <Card.Link className='mb-3' href={`/people/${person.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default PeopleCards;