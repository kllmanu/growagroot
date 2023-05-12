import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
} from "unique-names-generator";

const randomName = uniqueNamesGenerator({
  dictionaries: [adjectives, colors],
  style: "capital",
  separator: "",
  length: 2,
});

// start here: https://docs.pmnd.rs/zustand/getting-started/introduction
export const useGrootStore = create(
  persist(
    (set, get) => ({
      name: randomName + "Groot",
      created: new Date(),
      hydration: 10,
      happiness: 10,
      saturated: 10,
      status: "idle",
      water: () => {
        set({
          hydration: get().hydration + 1,
          status: "watering",
        }),
          setTimeout(() => {
            set({ status: "idle" });
          }, 2000);
      },
      play: () =>
        set({
          happiness: get().happiness + 1,
          status: "playing",
        }),
      pet: () => {
        set({
          happiness: get().happiness + 1,
          status: "petting",
        });

        setTimeout(() => {
          set({ status: "idle" });
        }, 2000);
      },
      eat: () =>
        set({
          saturated: get().saturated + 1,
          status: "eating",
        }),
    }),
    {
      name: "growagroot",
      getStorage: () => localStorage,
    }
  )
);
