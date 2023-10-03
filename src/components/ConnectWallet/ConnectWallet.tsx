import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,
} from '@nextui-org/react';

interface ConnectWalletProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const ConnectWallet: FC<ConnectWalletProps> = ({ isOpen, setIsOpen }) => (
  <Modal
    isOpen={isOpen}
    onOpenChange={setIsOpen}
    closeButton
  >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Login Modal</ModalHeader>
          <ModalBody>
            <Button as={Link} to="/app">Login</Button>
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
