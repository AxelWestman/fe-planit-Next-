'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ItinerarySummary = {
  trip_title?: string;
  destination?: string;
  durationDays?: number;
  totalActivities?: number;
  totalBudget?: number;
  days?: any[];
};

type AuthState = {
  token: string | null;
  userId: string | null;
  itinerary: ItinerarySummary;

  setAuth: (token: string, userId: string) => void;
  logout: () => void;

  // setters separados
  setTripTitle: (trip_title: string) => void;
  setDestination: (destination: string) => void;
  setDurationDays: (duration: number) => void;
  setTotalActivities: (activities: number) => void;
  setTotalBudget: (budget: number) => void;
  setDays: (days: any[]) => void;

  clearItinerary: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userId: null,
      itinerary: {},

      setAuth: (token, userId) => set({ token, userId }),
      logout: () => set({ token: null, userId: null, itinerary: {} }),

      setTripTitle: (trip_title) =>
        set((state) => ({ itinerary: { ...state.itinerary, trip_title } })),
      setDestination: (destination) =>
        set((state) => ({ itinerary: { ...state.itinerary, destination } })),
      setDurationDays: (durationDays) =>
        set((state) => ({ itinerary: { ...state.itinerary, durationDays } })),
      setTotalActivities: (totalActivities) =>
        set((state) => ({ itinerary: { ...state.itinerary, totalActivities } })),
      setTotalBudget: (totalBudget) =>
        set((state) => ({ itinerary: { ...state.itinerary, totalBudget } })),
      setDays: (days) =>
        set((state) => ({ itinerary: { ...state.itinerary, days } })),

      clearItinerary: () => set({ itinerary: {} }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
