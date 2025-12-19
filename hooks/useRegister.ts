import { useState } from 'react';

type RegisterData = {
  email: string;
  password: string;
};

type RegisterResult<T = any> = {
  data: T | null;
  error: string | null;
};

export function useRegister() {
  const [error, setError] = useState<string | null>(null);

  const registerHook = async (datos: RegisterData): Promise<RegisterResult> => {
    setError(null);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => null);
        const message = err?.message || 'Error al registrarse';
        setError(message);
        return { data: null, error: message };
      }

      const result = await response.json();
      return { data: result, error: null };
    } catch (err: any) {
      const message = err.message || 'Error inesperado';
      setError(message);
      return { data: null, error: message };
    }
  };

  return { registerHook, error };
}
