'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Itinerary = {
  trip_title: string;
  days: any[];
};

type AuthState = {
  token: string | null;
  userId: string | null;
  itinerary: Itinerary | null;

  setAuth: (token: string, userId: string) => void;
  logout: () => void;

  setItinerary: (itinerary: Itinerary) => void;
  clearItinerary: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userId: null,
      itinerary: null,

      setAuth: (token, userId) => set({ token, userId }),

      logout: () => set({ token: null, userId: null, itinerary: null }),

      setItinerary: (itinerary) => set({ itinerary }),

      clearItinerary: () => set({ itinerary: null }),
    }),
    {
      name: 'auth-storage', // nombre de la key en localStorage
      // si quieres separar puedes usar otro name aquí, ejemplo: 'auth-itinerary-storage'
    }
  )
);
