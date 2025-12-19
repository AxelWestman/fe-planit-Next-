import { useEffect, useState } from 'react';
import { useAuthStore } from "@/app/Stores/auth.store";

export default function useCreateTravel() {
  const { token } = useAuthStore(); 
  const { userId } = useAuthStore();
  const setTripTitle = useAuthStore((state) => state.setTripTitle);
  const setDestination = useAuthStore((state) => state.setDestination);
  const setDurationDays = useAuthStore((state) => state.setDurationDays);
  const setTotalActivities = useAuthStore((state) => state.setTotalActivities);
  const setTotalBudget = useAuthStore((state) => state.setTotalBudget);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createTravel = async (travelData : any) => {

    console.log('Creating travel with data:', travelData);

    if (travelData.trip_title) setTripTitle(travelData.trip_title);
    if (travelData.destination) setDestination(travelData.destination);
    if (travelData.durationDays) setDurationDays(travelData.durationDays);
    if (travelData.estimatedBudget) setTotalBudget(travelData.estimatedBudget);
    if (travelData.totalActivities) setTotalActivities(travelData.totalActivities);

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
