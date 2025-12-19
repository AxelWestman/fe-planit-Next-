import { useState } from 'react';
import { useAuthStore } from "@/app/Stores/auth.store";


export default function useGenerateItinerary() {
    const { token } = useAuthStore(); 

    

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const generateItinerary = async (travelId) => {
    
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`http://localhost:5290/api/travels/${travelId}/generate`, {
        method: 'POST', // o GET, según tu API
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error generando itinerario');
      }

      const data = await response.json();
      setSuccess(true);
      return data;
    } catch (err) {
      setError(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { generateItinerary, loading, error, success };
}
