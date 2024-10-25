import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  getIsAuthenticated: () => boolean;
}

interface NutritionState {
  BMI: number | null;
  Goal_weight: string;
  Diet: string;
  ActivityLevel: string;
  Cuisine: string; // New field for cuisine
  MealChoice: string; // New field for meal choice
  setBMI: (bmi: number) => void;
  setGoalWeight: (goalWeight: string) => void;
  setDiet: (diet: string) => void;
  setActivityLevel: (level: string) => void;
  setCuisine: (cuisine: string) => void; // New action for setting cuisine
  setMealChoice: (mealChoice: string) => void; // New action for setting meal choice
}


const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      setIsAuthenticated: (value) => set({ isAuthenticated: value }),
      getIsAuthenticated: () => get().isAuthenticated,
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

const useNutritionStore = create<NutritionState>()(
  persist(
    (set) => ({
      BMI: null,
      Goal_weight: '',
      Diet: '',
      ActivityLevel: '',
      Cuisine: '', // Initialize cuisine
      MealChoice: '', // Initialize meal choice

      setBMI: (bmi) => set(() => ({ BMI: bmi })),
      setGoalWeight: (goalWeight) => set(() => ({ Goal_weight: goalWeight })),
      setDiet: (diet) => set(() => ({ Diet: diet })),
      setActivityLevel: (level) => set(() => ({ ActivityLevel: level })),
      setCuisine: (cuisine) => set(() => ({ Cuisine: cuisine })), // Action to set cuisine
      setMealChoice: (mealChoice) => set(() => ({ MealChoice: mealChoice })), // Action to set meal choice
    }),
    {
      name: 'nutrition-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useAuthStore, useNutritionStore };
