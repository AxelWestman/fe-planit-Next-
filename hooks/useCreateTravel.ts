import { useState } from 'react';
import { useAuthStore } from "@/app/Stores/auth.store";

export default function useCreateTravel() {
  const { token } = useAuthStore(); 
  const { userId } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createTravel = async (travelData : any) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const payload = {
        userId: userId,
        ...travelData,
      };

      const response = await fetch('http://localhost:5290/api/travels', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al crear viaje');
      }

      const data = await response.json();
      setSuccess(true);
      return data;
    } catch (err) {
      console.error('Error creando viaje:', err);
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createTravel, loading, error, success };
}
