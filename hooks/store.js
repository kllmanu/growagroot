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
      name: "Groot",
      created: new Date(),
      hydration: 10,
      happiness: 10,
      saturated: 10,
      status: "idle",
      animationCount: 0,
      water: () => {
        set((state) => ({
          ...state,
          hydration: state.hydration >= 100 ? state.hydration : state.hydration + 10,
          animationCount: state.animationCount + 1,
          status: "watering",
        }));
        setTimeout(() => {
          set((state) => ({
            ...state,
            animationCount: state.animationCount - 1,
            status: state.animationCount === 0 ? "idle" : state.status,
          }));
        }, 2000);
      },
      play: () => {
        set((state) => ({
          ...state,
          happiness: state.happiness >= 100 ? state.happiness : state.happiness + 10,
          animationCount: state.animationCount + 1,
          status: "playing",
        }));
        setTimeout(() => {
          set((state) => ({
            ...state,
            animationCount: state.animationCount - 1,
            status: state.animationCount === 0 ? "idle" : state.status,
          }));
        }, 2000);
      },
      reset: () => {
        set((state) => ({
          ...state,
          animationCount: 0,
        }));
      },
      startHydrationTimer: () => {
        const timerId = setInterval(() => {
          set((state) => ({
            ...state,
            hydration: Math.max(0, state.hydration - 1), // decrease hydration level by 1
          }));
        }, 1000); // 1 minutes interval
        set((state) => ({
          ...state,
          timerId, // store the timerId in the state
        }));
      },
      startHappinessTimer: () => {
        const happinessTimerId = setInterval(() => {
          set((state) => ({
            ...state,
            happiness: Math.max(0, state.happiness - 1), // decrease hydration level by 1
          }));
        }, 1000); // 3 minutes interval
        set((state) => ({
          ...state,
          happinessTimerId, // store the timerId in the state
        }));
      },
    }),
    {
      name: "growagroot",
      getStorage: () => localStorage,
    }
  )
);
