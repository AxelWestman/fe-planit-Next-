'use client'
import React from 'react';
import Link from "next/link";
import NavigationBar from "../../components/Navbar";
import GeneratePdfButton from "@/components/GeneratePdfButton";
import TravelFormModal from "@/components/TravelFormModal";
import useCreateTravel from '@/hooks/useCreateTravel';
import useGenerateItinerary from '@/hooks/useGenerateItinerary';
import { useAuthStore } from "@/app/Stores/auth.store";
import ItineraryCard from '@/components/ItineraryCard';
import ItineraryNavigator from '@/components/ItineraryNavigator';
import TripInfoCard from '@/components/TripInfoCard';
import BudgetCard from '@/components/BudgetCard';
import { set } from 'zod';
import TravelHistory from '@/components/TravelHistory';
import TravelMap from '@/components/TravelMap';

const Dashboard = () => {

  const { createTravel, loading: creating, error: createError, success: createSuccess } = useCreateTravel();
  const { generateItinerary, loading: generating, error: generateError, success: generateSuccess } = useGenerateItinerary();

   const setDays = useAuthStore((state) => state.setDays);
  const itinerary = useAuthStore((state) => state.itinerary);

  const [verDashboard, setVerDashboard] = React.useState(false);

  const handleSaveItinerary = (itineraryData) => {
    setDays(itineraryData.days);
  };
    
    const handleTravelSubmit = async (data: any) => {
    setVerDashboard(false);
    const travelCreated = await createTravel(data);

    if (travelCreated && travelCreated.id) {
      console.log('Viaje creado:', travelCreated);
      const itinerary = await generateItinerary(travelCreated.id);

      if (itinerary) {
        console.log('Itinerario generado:', itinerary);
        handleSaveItinerary(itinerary);
        setVerDashboard(true);
        // Aquí puedes hacer lo que necesites con el resultado del itinerario
      }
    }
  };

  const [backgroundImage, setBackgroundImage] = React.useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const currentTrip = {
    destination: 'Kyoto, Japón',
    dates: '15 - 25 Diciembre, 2025',
    duration: '10 días',
    activities: 24,
    budget: { total: 1600, current: 1200 },
    progress: 75,
    expenses: {
      alojamiento: 600,
      transporte: 350,
      comida: 250
    },
    itinerary: [
      { time: '9:00 AM', title: 'Desayuno', location: 'Café Bibliotic Hello', icon: '☕' },
      { time: '11:00 AM', title: 'Fushimi Inari Shrine', location: 'Templo Principal', icon: '🗺️' },
      { time: '2:00 PM', title: 'Almuerzo', location: 'Nishiki Market', icon: '🍱' },
      { time: '4:00 PM', title: 'Kinkaku-ji Temple', location: 'Pabellón Dorado', icon: '🗺️' }
    ]
  };

  return (
    <>
    <NavigationBar isLoggedIn={true}/>
   <div className="min-h-screen bg-gray-50 relative flex flex-col items-center justify-center">
  {/* Background Image */}
  {backgroundImage && (
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
      }}
    ></div>
  )}

  {/* Content Wrapper */}
  <div className="relative z-10 flex-1 flex flex-col">
    {/* Condicional: si hay itinerary, renderizamos las cards */}
    {verDashboard ? (
      <div className="max-w-7xl mx-auto px-6 py-8 flex-1 flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-6 flex flex-col">
            <div className="flex-1 space-y-6">
              {/* Trip Info Card */}
              <TripInfoCard />

              {/* Map Card */}
              <TravelMap />
              {/* <div
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
                style={{ height: '420px' }}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50">
                 
                </div>
              </div> */}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <TravelHistory />
              <TravelFormModal onSubmit={handleTravelSubmit} />
              {(creating || generating) && <p>Procesando...</p>}
              <GeneratePdfButton />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6 flex flex-col">
            <div className="flex-1 space-y-6">
              <BudgetCard />
              <ItineraryNavigator />
            </div>
          </div>
        </div>
      </div>
    ) : (
      // Si no hay itinerary, mostramos solo los botones centrados
      <div className="flex-1 flex items-center justify-center">
        <div className="flex gap-3">
          <TravelHistory />
          <TravelFormModal onSubmit={handleTravelSubmit} />
          {(creating || generating) && <p>Procesando...</p>}
          { verDashboard ? (<GeneratePdfButton />) : null }
        </div>
      </div>
    )}
  </div>
</div>
</>

  );
};

export default Dashboard;