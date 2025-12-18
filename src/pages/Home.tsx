import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Fondo con imagen */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1683041132892-0fe990b3afc3?ixlib=rb-4.1.0&auto=format&fit=crop&w=1920&q=80"
            alt="Mountain landscape"
            className="w-full h-full object-cover"
          />
          {/* Overlay más suave */}
{/* Overlay blanco semitransparente */} <div className="absolute inset-0 bg-white opacity-20"></div>        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          

          <h2 className="text-lg md:text-xl text-gray-700 mb-8 mx-auto">
            Dejá que la IA cree itinerarios personalizados según tu estilo, presupuesto y preferencias.
          </h2><br />

          {/* Video centrado como bloque */}
          <div className="flex items-center justify-center mb-16">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full max-w-3xl rounded-lg shadow-lg"
            >
              <source src="/video1.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>

          {/* Botones */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <button
              onClick={() => window.location.href = "/login"}
              className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center gap-2"
            >
              Generar itinerario
              <span aria-hidden className="ml-1">→</span>
            </button>

            <button className="px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors">
              Ver ejemplo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
