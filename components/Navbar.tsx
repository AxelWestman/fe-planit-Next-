"use client";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Link from "next/link";

const NavigationBar = ({ isLoggedIn }) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" className="z-50">
      <Container>
        <Navbar.Brand as={Link} href="/">
          <img
            src="/logo.png"
            alt="Planit logo"
            className="img-fluid"
            style={{ maxHeight: "30px", width: "auto" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">Home</Nav.Link>

            {!isLoggedIn && (
              <NavDropdown title="Viajes" id="viajes-dropdown">
                <NavDropdown.Item as={Link} href="/crear-viaje">
                  Crear viaje
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} href="/mis-viajes">
                  Mis viajes
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {isLoggedIn && (
              <Nav.Link as={Link} href="/dashboard">Dashboard</Nav.Link>
            )}
          </Nav>

          <Nav>
            {!isLoggedIn ? (
              <>
                <Nav.Link as={Link} href="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} href="/login">Registrarse</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} href="/logout">Cerrar sesión</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
