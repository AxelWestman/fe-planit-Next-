import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isLoggedIn }) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="/logo.png"
            alt="Planit logo"
            className="img-fluid"
            style={{ maxHeight: '30px', width: 'auto' }}
          />
        </Navbar.Brand>

        {/* Botón hamburguesa para pantallas pequeñas */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Siempre visible */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {/* Solo si NO está logueado */}
            {!isLoggedIn && (
              <NavDropdown title="Viajes" id="viajes-dropdown">
                <NavDropdown.Item as={Link} to="/crear-viaje">Crear viaje</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mis-viajes">Mis viajes</NavDropdown.Item>
              </NavDropdown>
            )}

            {/* Solo si está logueado */}
            {isLoggedIn && (
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            )}
          </Nav>

          {/* Botones a la derecha */}
          <Nav>
            {!isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Registrarse</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/logout">Cerrar sesión</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
