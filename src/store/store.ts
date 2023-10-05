import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState } from 'types';

const initialState: Pick<AppState, 'theme'> = {
  theme: 'dark',
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get): AppState => ({
      ...initialState,
      toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
    }),
    { name: 'zustand-state' },
  ),
);
