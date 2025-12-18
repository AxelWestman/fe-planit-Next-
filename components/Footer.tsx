"use client";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-600">
      <Container fluid className="py-6 px-4">
        <Row className="items-center">
          {/* Logo extremo izquierdo */}
          <Col xs={12} md={4} className="flex items-center justify-start mb-4 md:mb-0">
            <Image
              src="/logo.png" // 👈 coloca tu logo en public/planit logo.png
              alt="Planit Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Col>

          {/* Navegación */}
          <Col xs={12} md={4} className="mb-4 md:mb-0 flex justify-center">
            <nav className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
              <Link href="/crear-viaje" className="hover:underline">
                Crear viaje
              </Link>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href="/register" className="hover:underline">
                Registro
              </Link>
            </nav>
          </Col>

          {/* Redes sociales */}
          <Col xs={12} md={4} className="flex justify-center md:justify-end gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook fs-5 hover:text-gray-300"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram fs-5 hover:text-gray-300"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter fs-5 hover:text-gray-300"></i>
            </a>
          </Col>
        </Row>

        {/* Derechos reservados */}
        <Row className="mt-6">
          <Col className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Planit. Todos los derechos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
