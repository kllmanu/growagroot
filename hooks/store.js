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
      water: () =>
        set({
          hydration: get().water + 1,
        }),
      play: () =>
        set({
          happiness: get().happiness + 1,
        }),
      pet: () =>
        set({
          happiness: get().happiness + 1,
        }),
      eat: () =>
        set({
          saturated: get().saturated + 1,
        }),
    }),
    {
      name: "growagroot",
      getStorage: () => localStorage,
    }
  )
);
