import { ethers } from 'ethers';

export const provider = window.ethereum
  ? new ethers.providers.Web3Provider(window.ethereum)
  : null;
