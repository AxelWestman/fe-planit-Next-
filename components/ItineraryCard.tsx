import React from 'react';

type Activity = {
  time: string;
  place_name: string;
  description: string;
  category: string;
  price_estimate?: string;
  requires_ticket?: boolean;
  coordinates?: { lat: number; lng: number };
};

type ItineraryDay = {
  day_number: number;
  theme: string;
  activities: Activity[];
};

type Props = {
  day: ItineraryDay;
};

const ItineraryCard = ({ day }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Día {day?.day_number}: {day?.theme}</h3>
        <p className="text-sm text-gray-500">Itinerario del día</p>
      </div>

      <div className="space-y-6">
        {day?.activities.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg flex-shrink-0">
                {/* Puedes poner iconos por categoría o usar emojis */}
                {item.category === 'Culture' ? '🏛️' : item.category === 'Food' ? '🍴' : '🗺️'}
              </div>
              {index < day?.activities.length - 1 && (
                <div className="w-0.5 h-16 bg-emerald-200 my-1"></div>
              )}
            </div>
            <div className="flex-1 pb-2">
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                🕐 {item.time}
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{item.place_name}</h4>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryCard;