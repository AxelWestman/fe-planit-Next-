'use client';

import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';


export default function TravelFormModal({ onSubmit }) {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    durationDays: '',
    estimatedBudget: '',
    travelStyle: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'durationDays' || name === 'estimatedBudget'
          ? value === '' ? '' : Number(value)
          : value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData({ destination: '', durationDays: '', estimatedBudget: '', travelStyle: '' }); // reset
    setShow(false);
  };

  return (
    <>
      <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm" onClick={() => setShow(true)} >
                + Generar Nuevo Itinerario
      </button> 

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo viaje</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="destination">
              <Form.Label>Destino</Form.Label>
              <Form.Control
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Ingrese el destino"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="durationDays">
              <Form.Label>Duración (días)</Form.Label>
              <Form.Control
                type="number"
                name="durationDays"
                value={formData.durationDays}
                onChange={handleChange}
                placeholder="Ingrese duración en días"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="estimatedBudget">
              <Form.Label>Presupuesto estimado</Form.Label>
              <Form.Control
                type="number"
                name="estimatedBudget"
                value={formData.estimatedBudget}
                onChange={handleChange}
                placeholder="Ingrese presupuesto"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="travelStyle">
              <Form.Label>Estilo de viaje</Form.Label>
              <Form.Select
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleChange}
              >
                <option value="">Seleccione un estilo</option>
                <option value="low cost">Low Cost</option>
                <option value="standard">Standard</option>
                <option value="luxury">Luxury</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancelar
          </Button>
          <Button className="!bg-emerald-500 !border-emerald-500" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
