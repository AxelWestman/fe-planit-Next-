import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-emerald-500 text-2xl">✈️</span>
            <span className="text-xl font-semibold text-gray-800">Planit</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">Iniciar sesión</a>
            <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">Comenzar</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1683041132892-0fe990b3afc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl mb-6 text-gray-900">
            Planificá tu próximo viaje <br />
            <span className="text-emerald-500">con inteligencia</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Dejá que la IA cree itinerarios personalizados según tu estilo, presupuesto y preferencias.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2">
              Generar itinerario
              <span aria-hidden className="ml-1">→</span>
            </button>
            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              Ver ejemplo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-emerald-500 mb-2">10K+</div>
              <div className="text-gray-600">Itinerarios creados</div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="text-4xl text-emerald-500 mb-2">150+</div>
              <div className="text-gray-600">Destinos</div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-center gap-2 text-4xl text-emerald-500 mb-2">
                4.9
                <span className="w-8 h-8 text-amber-400 text-2xl ml-2">★</span>
              </div>
              <div className="text-gray-600">Valoración</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}