export interface AppState {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  metamaskError?: string;
  setMetamaskError: (v?: string) => void;
  connectingMetamask: boolean;
  setConnectingMetamask: (isConnecting: boolean) => void;
  connectedMetamask: boolean;
  setConnectedMetamask: (isConnecting: boolean) => void;

  // metamask account
  activeAccount: string | null;
  setActiveAccount: (account: string) => void;
}
