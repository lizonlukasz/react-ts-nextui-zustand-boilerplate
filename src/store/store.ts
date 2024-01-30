import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState } from 'types';

const initialState: AppState = {
  theme: 'dark',
  connectingMetamask: false,
  activeAccount: null,
};

export const useAppStore = create<AppState>()(
  persist(
    () => initialState,
    { name: 'zustand-state' },
  ),
);
