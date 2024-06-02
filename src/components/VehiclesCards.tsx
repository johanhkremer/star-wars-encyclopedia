import { Col, Row } from 'react-bootstrap';
import { StarWarsVehicles } from '../types/StarWarsAPI.types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface VehiclesCardsProps {
    vehicles: StarWarsVehicles[];
}

const VehiclesCards: React.FC<VehiclesCardsProps> = ({ vehicles }) => {
    return (
        <Row>
            {vehicles.map((vehicle) => (
                <Col key={vehicle.id} xs={12} sm={6} md={4} lg={3} style={{ marginBottom: '1rem' }}>
                    <Card style={{ width: '100%', height: '100%' }}>
                        <Card.Body style={{ height: 'auto', overflow: 'hidden' }}>
                            <Card.Title>{vehicle.name}</Card.Title>
                            <Card.Text>
                                {vehicle.model}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Manufacturer: {vehicle.manufacturer}</ListGroup.Item>
                            <ListGroup.Item>Model: {vehicle.model}</ListGroup.Item>
                            <ListGroup.Item>Passengers: {vehicle.passengers}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href={`/vehicles/${vehicle.id}`}>Read more</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default VehiclesCards;