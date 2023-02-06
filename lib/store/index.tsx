import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
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

interface BlackListStore {
  ingredients: string[];
  // eslint-disable-next-line no-unused-vars
  addIngredient: (value: string) => any;
  // eslint-disable-next-line no-unused-vars
  removeIngredient: (value: string) => void;
}
interface HistoryStore {
  history: { type: string; food: string; diet: string }[];
  // eslint-disable-next-line no-unused-vars
  addIngredient: (value: { type: string; food: string; diet: string }) => any;
  // eslint-disable-next-line no-unused-vars
  clear: () => void;
}

export const useDietStore = create<DietState>()((set) => ({
  diet: "",
  food: "",
  type: "",
  setDiet: (diet) => set(() => ({ diet })),
  setFood: (food) => set(() => ({ food, diet: "" })),
  setType: (type) => set(() => ({ type, diet: "" })),
}));

export const useBlackListStore = create<BlackListStore>()(
  persist(
    (set, get) => ({
      ingredients: [],
      addIngredient: (value) =>
        set(() => {
          return { ingredients: [value, ...get().ingredients] };
        }),
      removeIngredient: (value) =>
        set(() => {
          const filter = get().ingredients.filter(
            (ingredient) => ingredient !== value
          );
          return { ingredients: filter };
        }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
export const useHistoryStore = create<HistoryStore>()(
  persist(
    (set, get) => ({
      history: [],
      addIngredient: (value) =>
        set(() => {
          return { history: [value, ...get().history] };
        }),
      clear: () =>
        set(() => ({
          history: [],
        })),
    }),
    {
      name: "history-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
