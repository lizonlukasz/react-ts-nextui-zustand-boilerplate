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

// const ValidateProvider: FC<PropsWithChildren> = ({ children }) => {
//   const {
//     setMetamaskError, connectingMetamask, setConnectingMetamask, setActiveAccount,
//   } = useAppStore();
//
//   if ()
// };

export const Entrypoint: FC<PropsWithChildren> = ({ children }) => {
  const { setMetamaskError, setActiveAccount } = useAppStore();
  // const initializeProvider = async () => {
  //   const provider2 = await detectEthereumProvider();
  //
  //   console.log('provider2');
  //   console.log(provider2);
  //
  //   if (provider2) {
  //     setEthProviderInitialized(true);
  //     if (provider2 !== window.ethereum) setMetamaskError('Do you have multiple wallets installed?');
  //   } else {
  //     setMetamaskError('Please install MetaMask to use this app!');
  //   }
  // };

  // ======================================================
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [defaultAccount, setDefaultAccount] = useState(null);
  // const [userBalance, setUserBalance] = useState(null);

  // const getuserBalance = async (address) => {
  //   const balance = await provider.getBalance(address, 'latest');
  // };

  // const handleAccountChanged = async () => {
  //   const signer = provider.getSigner();
  //   const address = await signer.getAddress();
  //   setActiveAccount(address);
  // };

  // const handleWalletConnect = () => {
  //   if (provider) {
  //     provider.send('eth_requestAccounts', [])
  //       .then(handleAccountChanged)
  //       .then(() => setConnectingMetamask(false))
  //       .catch(() => {
  //         setMetamaskError('Unable to get account details');
  //         setConnectingMetamask(false);
  //       });
  //   } else {
  //     setMetamaskError('Please Install Metamask First');
  //     setConnectingMetamask(false);
  //   }
  // };

  const checkConnection = async () => {
    if (provider) {
      try {
        const accounts = await provider.listAccounts();
        // setConnectedAccounts(accounts);

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

  // useEffect(() => {
  //     if (connectingMetamask) handleWalletConnect();
  // }, [connectingMetamask]);

  // const getAccount = async () => {
  //   const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
  //     .catch((err) => {
  //       if (err.code === 4001) {
  //         console.log('Please connect to MetaMask.');
  //       } else {
  //         console.error(err);
  //       }
  //     });
  //   const account = accounts[0];
  //   showAccount.innerHTML = account;
  // };

  useEffect(() => {
    checkConnection().then();
  }, []);

  return (
    <>
      {children}
    </>
  );
};
