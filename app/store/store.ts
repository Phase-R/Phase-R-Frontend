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
  EstimatedTime: string;
  Calories: string;
  ActivityLevel: string;
  setBMI: (bmi: number) => void;
  setGoalWeight: (goalWeight: string) => void;
  setDiet: (diet: string) => void;
  setEstimatedTime: (time: string) => void;
  setCalories: (calories: string) => void;
  setActivityLevel: (level: string) => void;
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
      EstimatedTime: '',  // Initial state
      Calories: '',       // Initial state
      ActivityLevel: '',  // Initial state

      setBMI: (bmi) => set(() => ({ BMI: bmi })),
      setGoalWeight: (goalWeight) => set(() => ({ Goal_weight: goalWeight })),
      setDiet: (diet) => set(() => ({ Diet: diet })),
      setEstimatedTime: (time) => set(() => ({ EstimatedTime: time })), // Action to update EstimatedTime
      setCalories: (calories) => set(() => ({ Calories: calories })), // Action to update Calories
      setActivityLevel: (level) => set(() => ({ ActivityLevel: level })), // Action to update ActivityLevel
    }),
    {
      name: 'nutrition-storage', // Key for local storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useAuthStore, useNutritionStore };