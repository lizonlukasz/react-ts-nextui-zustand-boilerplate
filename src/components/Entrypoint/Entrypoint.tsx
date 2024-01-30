import { FC, PropsWithChildren, useEffect } from 'react';
import { useAppStore } from 'store';

export const Entrypoint: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    if (!window.ethereum) return () => undefined;

    const handleAccountChange = (accounts: string[]) => {
      useAppStore.setState({ activeAccount: accounts[0] });
      console.log('account has been changed or connected');
    };

    const handleDisconnect = () => {
      useAppStore.setState({ activeAccount: null });
      console.log('wallet disconnected');
    };

    window.ethereum.addListener('accountsChanged', handleAccountChange);
    window.ethereum.addListener('disconnect', handleDisconnect);
    // check if user is already connected
    window.ethereum.request({ method: 'eth_accounts' })
      .then(handleAccountChange)
      .catch(() => useAppStore.setState({ metamaskError: 'Unable to get accounts' }));

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountChange);
      window.ethereum.removeListener('disconnect', handleDisconnect);
    };
  }, []);

  return children;
};
