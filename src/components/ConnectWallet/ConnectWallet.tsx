import { FC } from 'react';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, CardBody, Image, Card,
} from '@nextui-org/react';
import metamaskIcon from 'assets/metamask.png';
import { useAppStore } from '../../store';
import { provider } from '../../provider';

interface ConnectWalletProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const ConnectWallet: FC<ConnectWalletProps> = ({ isOpen, setIsOpen }) => {
  const { setConnectingMetamask, setMetamaskError, setActiveAccount } = useAppStore();

  const handleWalletConnect = async () => {
    setConnectingMetamask(true);

    if (provider) {
      try {
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setActiveAccount(address);
        setConnectingMetamask(false);
      } catch (_e) {
        setMetamaskError('Unable to get account details');
        setConnectingMetamask(false);
      }
    } else {
      setMetamaskError('Please Install Metamask First');
      setConnectingMetamask(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      closeButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Connect wallet</ModalHeader>
            <ModalBody>

              <Card
                className="dark:bg-default-100/50 cursor-pointer"
                isPressable
                onPress={handleWalletConnect}
              >
                <CardBody className="m-0 p-4">
                  <div className="flex items-center">
                    <Image
                      alt="Metamask logo"
                      width={50}
                      shadow="sm"
                      src={metamaskIcon}
                    />

                    <h1 className="text-xl ml-4 font-semibold">MetaMask</h1>
                  </div>
                </CardBody>
              </Card>

            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
