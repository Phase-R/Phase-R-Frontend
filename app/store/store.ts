import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  getIsAuthenticated: () => boolean;
}


interface NutritionState {
  BMI: number | null;     // BMI state
  Goal_weight: string;    // Goal weight
  Diet: string;           // Diet type
  setBMI: (bmi: number) => void;                // Action to set BMI
  setGoalWeight: (goalWeight: string) => void;  // Action to set goal weight
  setDiet: (diet: string) => void;              // Action to set diet choice
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
      BMI: null,          // Initial state
      Goal_weight: '',    // Initial state
      Diet: '',           // Initial state

      setBMI: (bmi) => set(() => ({ BMI: bmi })),              // Action to update BMI
      setGoalWeight: (goalWeight) => set(() => ({ Goal_weight: goalWeight })),  // Action to update Goal Weight
      setDiet: (diet) => set(() => ({ Diet: diet })),          // Action to update Diet
    }),
    {
      name: 'nutrition-storage', // Key for local storage
      storage: createJSONStorage(() => localStorage),  // Persist in localStorage
    }
  )
);

export { useAuthStore, useNutritionStore };