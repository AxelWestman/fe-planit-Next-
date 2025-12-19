import React from 'react'
import { useAuthStore } from '@/app/Stores/auth.store';

type Props = {}

function TripInfoCard({}: Props) {
  const { itinerary } = useAuthStore(); 

  const totalActivities = itinerary.totalActivities || 0;

  if (!itinerary){
    return <p>Nada por acá</p>;
  } else{
      const totalActivities = itinerary.days?.reduce(
        (sum, day) => sum + day.activities.length,
        0
      );
  }


  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500 mb-1">Próximo Viaje</p>
          <h2 className="text-xl font-semibold text-gray-900">{itinerary.destination}</h2>
        </div>
        <div className="bg-emerald-100 rounded-full p-3">
          <span className="text-xl">📍</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Duración</p>
          <p className="font-semibold text-gray-900">{itinerary.days?.length} días</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 mb-1">Actividades planeadas</p>
          <p className="font-semibold text-gray-900">{totalActivities}</p>
        </div>
      </div>

      <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors">
        Ver Itinerario →
      </button>
    </div>
  );
}


export default TripInfoCard