import { FC } from 'react';
import {
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button,
} from '@nextui-org/react';

interface ConnectWalletProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

export const LoginModal: FC<ConnectWalletProps> = ({ isOpen, setIsOpen }) => (
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

            <h3>Login logic goes here</h3>

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
