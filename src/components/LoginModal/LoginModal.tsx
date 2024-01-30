import { FC } from 'react';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Card, CardBody, Image,
} from '@nextui-org/react';
import metamaskIcon from 'assets/metamask.png';
import { useAppStore } from '../../store';

interface ConnectWalletProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const LoginModal: FC<ConnectWalletProps> = ({ isOpen, setIsOpen }) => {
  const handleWalletConnect = () => {
    useAppStore.setState({ connectingMetamask: true });

    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((accounts: string[]) => {
          useAppStore.setState({ activeAccount: accounts[0] });
          useAppStore.setState({ connectingMetamask: false });
        })
        .catch(() => useAppStore.setState({ metamaskError: 'Unable to connect to MetaMask' }));
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
