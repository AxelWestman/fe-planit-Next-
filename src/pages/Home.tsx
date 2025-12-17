import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const userName = 'Usuario'; // Esto puede venir de props, contexto o API

  return (
    <div className="container mt-5 text-center">
      <h2>🏠 Buenos días, {userName} 👋</h2>
      <p>Esta es la vista principal que se carga con la ruta "/"</p>

      <Button variant="primary" className="mt-3" onClick={() => setShowForm(!showForm)}>
        Crear viaje
      </Button>

      {showForm && (
        <Form className="mt-4 text-start mx-auto" style={{ maxWidth: '500px' }}>
          <Form.Group controlId="formDestino">
            <Form.Label>Destino</Form.Label>
            <Form.Control type="text" placeholder="Ej. Bariloche" />
          </Form.Group>

          <Form.Group controlId="formFecha" className="mt-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Button variant="success" type="submit" className="mt-4">
            Guardar viaje
          </Button>
        </Form>
      )}
    </div>
  );
};

export default Home;
