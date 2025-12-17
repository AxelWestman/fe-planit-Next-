'use client'
import React from 'react';

const Dashboard = () => {
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
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.15
          }}
        ></div>
      )}

      {/* Content Wrapper */}
      <div className="relative z-10">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-2xl">▶</span>
            <span className="text-xl font-semibold text-gray-800">Planit</span>
          </div>
          <div className="flex items-center gap-4">
            <label className="cursor-pointer text-gray-600 hover:text-gray-800 flex items-center gap-2">
              <span className="text-sm font-medium">🖼️ Fondo</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="text-xl">☰</span>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <span className="text-xl">👤</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-6">
            {/* Trip Info Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Próximo Viaje</p>
                  <h2 className="text-xl font-semibold text-gray-900">{currentTrip.destination}</h2>
                </div>
                <div className="bg-emerald-100 rounded-full p-3">
                  <span className="text-xl">📍</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
                <span>📅</span>
                <span>{currentTrip.dates}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duración</p>
                  <p className="font-semibold text-gray-900">{currentTrip.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Actividades planeadas</p>
                  <p className="font-semibold text-gray-900">{currentTrip.activities}</p>
                </div>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors">
                Ver Itinerario →
              </button>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden" style={{ height: '420px' }}>
              <div className="relative w-full h-full bg-gradient-to-br from-emerald-50 to-teal-50">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                  <defs>
                    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#10b981" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Map Pins */}
                <div className="absolute" style={{ top: '20%', left: '35%' }}>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full relative shadow-lg animate-pulse">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-emerald-500"></div>
                  </div>
                </div>
                <div className="absolute" style={{ top: '45%', right: '28%' }}>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full relative shadow-lg">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-emerald-500"></div>
                  </div>
                </div>
                <div className="absolute" style={{ top: '35%', left: '25%' }}>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full relative shadow-lg">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-emerald-500"></div>
                  </div>
                </div>
                <div className="absolute" style={{ bottom: '25%', right: '35%' }}>
                  <div className="w-8 h-8 bg-emerald-500 rounded-full relative shadow-lg">
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-emerald-500"></div>
                  </div>
                </div>

                {/* Zoom controls */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md overflow-hidden">
                  <button className="block px-4 py-2 hover:bg-gray-50 border-b border-gray-200">+</button>
                  <button className="block px-4 py-2 hover:bg-gray-50">−</button>
                </div>

                {/* Compass */}
                <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                  <span className="text-lg">🧭</span>
                </div>

                {/* Location Label */}
                <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg px-4 py-3">
                  <p className="text-xs text-gray-500 mb-1">Ubicación Actual</p>
                  <p className="font-semibold text-gray-900">Kyoto, Japón</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm">
                + Generar Nuevo Itinerario
              </button>
              <button className="bg-white hover:bg-gray-50 border border-gray-200 font-semibold py-3 px-4 rounded-xl transition-colors text-sm">
                📄 Exportar PDF
              </button>
              <button className="bg-white hover:bg-gray-50 border border-gray-200 font-semibold py-3 px-4 rounded-xl transition-colors text-sm">
                🔗 Compartir
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Budget Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Presupuesto</p>
                  <h2 className="text-xl font-semibold text-gray-900">
                    ${currentTrip.budget.current} / ${currentTrip.budget.total}
                  </h2>
                </div>
                <div className="bg-emerald-100 rounded-full p-3">
                  <span className="text-xl">💰</span>
                </div>
              </div>

              {/* Progress Circle */}
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#10b981"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      strokeDashoffset={`${2 * Math.PI * 56 * (1 - currentTrip.progress / 100)}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{currentTrip.progress}%</span>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Progreso</span>
                    <span className="text-sm font-semibold text-gray-900">{currentTrip.progress}%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Alojamiento</span>
                      <span className="text-sm font-semibold text-gray-900">${currentTrip.expenses.alojamiento}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Transporte</span>
                      <span className="text-sm font-semibold text-gray-900">${currentTrip.expenses.transporte}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Comida</span>
                      <span className="text-sm font-semibold text-gray-900">${currentTrip.expenses.comida}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Itinerario del Día</h3>
                <p className="text-sm text-gray-500">Lunes, 15 de Diciembre</p>
              </div>

              <div className="space-y-6">
                {currentTrip.itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg flex-shrink-0">
                        {item.icon}
                      </div>
                      {index < currentTrip.itinerary.length - 1 && (
                        <div className="w-0.5 h-16 bg-emerald-200 my-1"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                        🕐 {item.time}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;