import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Star Wars Encyclopedia</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="films">Films</Nav.Link>
                        <Nav.Link href="people">People</Nav.Link>
                        <Nav.Link href="planets">Planets</Nav.Link>
                        <Nav.Link href="species">Species</Nav.Link>
                        <Nav.Link href="starships">Starships</Nav.Link>
                        <Nav.Link href="vehicles">Vehicles</Nav.Link>
                    </Nav>
                    <Form className='inline'>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;