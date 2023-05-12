import { create } from 'zustand'

// start here: https://docs.pmnd.rs/zustand/getting-started/introduction
const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))