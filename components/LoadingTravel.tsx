'use client';
import { useEffect, useState } from 'react';

type Props = {
  isLoading: boolean;
};

const LoadingTravel = ({ isLoading }: Props) => {
  const [message, setMessage] = useState('Preparando viaje...');

  useEffect(() => {
    if (!isLoading) return;

    // Cambia el mensaje después de 3 segundos
    const timer = setTimeout(() => {
      setMessage('¡Su próximo viaje está más cerca!');
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md w-full max-w-md mx-auto mt-6">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mb-4"></div>

      {/* Texto */}
      <p className="text-gray-700 font-semibold text-center">{message}</p>
    </div>
  );
};

export default LoadingTravel;
