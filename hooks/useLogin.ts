import { useState } from 'react';
import { useAuthStore } from '@/app/Stores/auth.store';

type LoginData = {
  email: string;
  password: string;
};

type LoginResult<T = any> = {
  data: T | null;
  error: string | null;
};

export function useLogin() {
  const { setAuth } = useAuthStore();
  const [error, setError] = useState<string | null>(null);

  const loginHook = async (datos: LoginData): Promise<LoginResult> => {
    setError(null);

    try {
      const response = await fetch('http://localhost:5290/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => null);
        const message = err?.message || 'Error al loguearse';
        setError(message);
        return { data: null, error: message };
      }

      const result = await response.json();
      
       if (result?.token && result?.userId) {
        setAuth(result.token, result.userId);
      }
      
      return { data: result, error: null };
    } catch (err: any) {
      const message = err.message || 'Error inesperado';
      setError(message);
      return { data: null, error: message };
    }
  };

  return { loginHook, error };
}
