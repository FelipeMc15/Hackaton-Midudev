import { create } from "zustand";

interface DietState {
  type: string;
  food: string;
  diet: string;
  // eslint-disable-next-line no-unused-vars
  setDiet: (value: string) => void;
}

export const useDietStore = create<DietState>()((set) => ({
  diet: "",
  food: "",
  type: "",
  setDiet: (diet) => set((state) => ({ ...state, diet })),
}));
