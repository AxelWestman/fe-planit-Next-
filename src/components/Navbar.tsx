import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Logo o título */}
        <Navbar.Brand as={Link} to="/">Planit</Navbar.Brand>

        {/* Botón hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>

            {/* Menú desplegable */}
            <NavDropdown title="Viajes" id="viajes-dropdown">
              <NavDropdown.Item as={Link} to="/crear-viaje">Crear viaje</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mis-viajes">Mis viajes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
