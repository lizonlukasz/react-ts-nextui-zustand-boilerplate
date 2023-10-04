import {
  FC, PropsWithChildren, useEffect,
} from 'react';
import { useAppStore } from '../../store';
import { provider } from '../../provider';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export const Entrypoint: FC<PropsWithChildren> = ({ children }) => {
  const { setMetamaskError, setActiveAccount } = useAppStore();

  const checkConnection = async () => {
    if (provider) {
      try {
        const accounts = await provider.listAccounts();

        if (accounts.length) {
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          setActiveAccount(address);
        }
      } catch (_e) {
        setMetamaskError('Unable to get account details');
      }
    } else {
      setMetamaskError('Please Install Metamask First');
    }

    // window.ethereum.request({ method: 'eth_accounts' }).then(console.log).catch(console.error);
  };

  useEffect(() => {
    checkConnection().then();
  }, []);

  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
