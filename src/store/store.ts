import { create } from 'zustand';
import { AppState } from 'types';
import { persistLs, getLsState } from './lsHelpers';

const initialState: Pick<
AppState,
'theme'
| 'connectingMetamask'
| 'activeAccount'
| 'connectedMetamask'
> = {
  theme: 'dark',
  connectingMetamask: false,
  activeAccount: null,
  connectedMetamask: false,
  ...getLsState(),
};

export const useAppStore = create<AppState>((set) => ({
  ...initialState,
  toggleTheme: () => set((state) => persistLs({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
  setMetamaskError: (value) => set(() => persistLs({ metamaskError: value })),
  setConnectingMetamask: (value) => set(() => persistLs({ connectingMetamask: value })),
  setActiveAccount: (value) => set(() => persistLs({ activeAccount: value })),
  setConnectedMetamask: (value) => set(() => persistLs({ connectedMetamask: value })),
}));
