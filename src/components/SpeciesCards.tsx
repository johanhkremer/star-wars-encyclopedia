import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { StarWarsSpeciesMuliple } from '../types/StarWarsAPI.types';
import { Col, Row } from 'react-bootstrap';

interface SpeciesCardProps {
    species: StarWarsSpeciesMuliple[];
}

const SpeciesCard: React.FC<SpeciesCardProps> = ({ species }) => {
    return (
        <Row>
            {species.map((specie) => (
                <Col key={specie.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body style={{ height: 'auto', overflow: 'hidden' }}>
                            <Card.Title>{specie.name}</Card.Title>
                            <Card.Text>
                                {specie.classification}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Designation: {specie.designation}</ListGroup.Item>
                            <ListGroup.Item>Average Height: {specie.average_height}</ListGroup.Item>
                            <ListGroup.Item>Average Lifespan: {specie.average_lifespan}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={`/species/${specie.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default SpeciesCard;