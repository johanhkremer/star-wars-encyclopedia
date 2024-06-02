import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Star Wars Encyclopedia</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/films">Films</Nav.Link>
                        <Nav.Link as={NavLink} to="/people">People</Nav.Link>
                        <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
                        <Nav.Link as={NavLink} to="/species">Species</Nav.Link>
                        <Nav.Link as={NavLink} to="/starships">Starships</Nav.Link>
                        <Nav.Link as={NavLink} to="/vehicles">Vehicles</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;