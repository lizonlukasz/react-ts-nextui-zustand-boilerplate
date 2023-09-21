import { create } from 'zustand';
import { AppState } from 'types';
import { persistLs, getLsState } from './lsHelpers';

const initialState: Pick<AppState, 'theme'> = {
  theme: 'dark',
  ...getLsState(),
};

export const useAppStore = create<AppState>((set) => ({
  ...initialState,
  toggleTheme: () => set((state) => persistLs({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));
