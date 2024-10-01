import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CityStore {
  favoriteCities: string[];
  addCity: (city: string) => void;
  removeCity: (city: string) => void;
  clearCities: () => void;
}

export const useCityStore = create(
  persist<CityStore>(
    (set) => ({
      favoriteCities: [],
      addCity: (city: string) => set((state) => ({
        favoriteCities: [...state.favoriteCities, city],
      })),
      removeCity: (city: string) => set((state) => ({
        favoriteCities: state.favoriteCities.filter((c) => c !== city),
      })),
      clearCities: () => set({
        favoriteCities: [],
      }),
    }),
    {
      name: 'favorite-cities-storage', // Имя ключа в LocalStorage
      getStorage: () => localStorage, // Используем LocalStorage
    },
  ),
);
