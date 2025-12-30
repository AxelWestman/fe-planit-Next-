import { useState, useEffect } from 'react';
import { useAuthStore } from '@/app/Stores/auth.store';

export interface TravelSummary {
  id: string;
  destination: string;
  startDate: string;
  endDate: string;
  durationDays: number;
}
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export default function useUserTravels() {
  const { token, userId } = useAuthStore();
  const [travels, setTravels] = useState<TravelSummary[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTravels = async () => {
    if (!userId || !token) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/api/travels/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Error al obtener viajes');
      }

      const data = await response.json();
      setTravels(data); // asumir que la API devuelve un array de viajes
    } catch (err: any) {
      setError(err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTravels();
  }, [userId, token]);

  return { travels, loading, error, refetch: fetchTravels };
}