import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppState } from 'types';

const initialState: Pick<
AppState,
'theme'
| 'connectingMetamask'
| 'activeAccount'
> = {
  theme: 'dark',
  connectingMetamask: false,
  activeAccount: null,
};

// export const useAppStore = create<AppState>()(
//   persist(
//     (set, get): AppState => ({
//       ...initialState,
//       toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
//       setMetamaskError: (value) => set({ metamaskError: value }),
//       setConnectingMetamask: (value) => set({ connectingMetamask: value }),
//       setActiveAccount: (value) => set({ activeAccount: value }),
//     }),
//     { name: 'zustand-state' },
//   ),
// );

export const useAppStore = create<AppState>(
  (set, get): AppState => ({
    ...initialState,
    toggleTheme: () => set({ theme: get().theme === 'dark' ? 'light' : 'dark' }),
    setMetamaskError: (value) => set({ metamaskError: value }),
    setConnectingMetamask: (value) => set({ connectingMetamask: value }),
    setActiveAccount: (value) => set({ activeAccount: value }),
  }),
);
