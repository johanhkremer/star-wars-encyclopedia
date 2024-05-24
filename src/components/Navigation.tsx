import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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

                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;