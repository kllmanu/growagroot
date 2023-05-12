import { create } from "zustand";
import { persist } from "zustand/middleware";

// start here: https://docs.pmnd.rs/zustand/getting-started/introduction
export const useStore = create(
  persist(
    (set, get) => ({
      fishes: 0,
      addAFish: () => set({ fishes: get().fishes + 1 }),
    }),
    {
      name: "growagroot", // unique name
      getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }
  )
);
