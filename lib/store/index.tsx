import { create } from "zustand";

interface DietState {
  type: string;
  food: string;
  diet: string;
  // eslint-disable-next-line no-unused-vars
  setDiet: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  setFood: (value: string) => void;
  // eslint-disable-next-line no-unused-vars
  setType: (value: string) => void;
}

export const useDietStore = create<DietState>()((set) => ({
  diet: "",
  food: "",
  type: "",
  setDiet: (diet) => set(() => ({ diet })),
  setFood: (food) => set(() => ({ food, diet: "" })),
  setType: (type) => set(() => ({ type, diet: "" })),
}));
