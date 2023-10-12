import { BrowserProvider } from 'ethers';

export const provider = window?.ethereum
  ? new BrowserProvider(window.ethereum)
  : null;
