import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#Star Wars Encyclopedia">Star Wars Encyclopedia</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#People">People</Nav.Link>
                        <Nav.Link href="#Planets">Planets</Nav.Link>
                        <Nav.Link href="#Species">Species</Nav.Link>
                        <Nav.Link href="#Starships">Starships</Nav.Link>
                        <Nav.Link href="#Vehicles">Vehicles</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;