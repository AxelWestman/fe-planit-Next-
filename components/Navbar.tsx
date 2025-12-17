'use client';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Logo o título */}
        <Navbar.Brand as={Link} href="/">
  Planit
</Navbar.Brand>

        {/* Botón hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>
<Nav.Link as={Link} href="/dashboard">Dashboard</Nav.Link>

            {/* Menú desplegable */}
            <NavDropdown title="Viajes" id="viajes-dropdown">
  <NavDropdown.Item as={Link} href="/crear-viaje">
    Crear viaje
  </NavDropdown.Item>

  <NavDropdown.Item as={Link} href="/mis-viajes">
    Mis viajes
  </NavDropdown.Item>
</NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;