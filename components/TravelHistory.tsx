'use client';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import useUserTravels from '@/hooks/useUserTravels';

type Props = {
  onSelectTravel?: (travel: any) => void;
};

const TravelHistory = ({ onSelectTravel }: Props) => {
  const [show, setShow] = useState(false);
  const { travels, loading, error } = useUserTravels();

  const handleSelect = (travel: any) => {
    onSelectTravel!(travel);
    setShow(false);
  };

  return (
    <>
      {/* Botón normal */}
      <Button
        variant="outline-secondary"
        onClick={() => setShow(true)}
      >
        📂 Historial
      </Button>

      {/* Offcanvas */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Consultas anteriores</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {loading && <p>Cargando viajes...</p>}
          {error && <p className="text-danger">{error}</p>}
          {!loading && travels.length === 0 && (
            <p>No hay consultas guardadas</p>
          )}

          <div className="d-flex flex-column gap-2">
            {travels.map((trip) => (
              <button
                key={trip.id}
               
                className="text-start p-3 border rounded bg-light"
              >
                <strong>{trip.destination}</strong>
                <div className="text-muted text-sm">
                  {trip.durationDays} días
                </div>
              </button>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TravelHistory;
