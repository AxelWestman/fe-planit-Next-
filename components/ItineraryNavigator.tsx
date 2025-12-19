import React, { useState } from 'react';
import ItineraryCard from './ItineraryCard';

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

type ItineraryData = {
  trip_title: string;
  days: ItineraryDay[];
};

type Props = {
  itineraryData: ItineraryData;
};

const ItineraryNavigator = ({ itineraryData }: Props) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const totalDays = itineraryData.days.length;

  const prevDay = () => {
    setCurrentDayIndex((index) => (index > 0 ? index - 1 : index));
  };

  const nextDay = () => {
    setCurrentDayIndex((index) => (index < totalDays - 1 ? index + 1 : index));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{itineraryData.trip_title}</h2>

      <ItineraryCard day={itineraryData.days[currentDayIndex]} />

      <div className="mt-4 flex justify-between">
        <button
          onClick={prevDay}
          disabled={currentDayIndex === 0}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          &lt; Día anterior
        </button>

        <button
          onClick={nextDay}
          disabled={currentDayIndex === totalDays - 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Día siguiente &gt;
        </button>
      </div>
    </div>
  );
};

export default ItineraryNavigator;
