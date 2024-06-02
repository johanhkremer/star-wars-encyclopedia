import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Star Wars Encyclopedia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/films">Films</Nav.Link>
                            <Nav.Link as={NavLink} to="/people">People</Nav.Link>
                            <Nav.Link as={NavLink} to="/planets">Planets</Nav.Link>
                            <Nav.Link as={NavLink} to="/species">Species</Nav.Link>
                            <Nav.Link as={NavLink} to="/starships">Starships</Nav.Link>
                            <Nav.Link as={NavLink} to="/vehicles">Vehicles</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
