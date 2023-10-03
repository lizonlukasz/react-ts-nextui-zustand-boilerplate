import { FC } from 'react';
import {
  Button, Image, Link, Navbar, NavbarContent, NavbarItem, useDisclosure,
} from '@nextui-org/react';
import reactLogo from 'assets/react_logo-512.png';
import { ThemeSwitcher } from '../../components/ThemeSwitcher';
import { ConnectWallet } from '../../components/ConnectWallet/ConnectWallet';

export const LandingPage: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      className="max-w-screen h-full min-h-screen flex flex-col items-center"
    >
      <Navbar position="sticky">
        <NavbarContent justify="end">
          <ThemeSwitcher />
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat" onClick={onOpen}>
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ConnectWallet isOpen={isOpen} setIsOpen={onOpenChange} />
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="w-screen h-screen flex justify-center items-center p-10">

        <div className="w-full lg:w-1/2 mr-10">
          <div className="text-left mb-3">
            <h1 className="inline font-semibold text-4xl lg:text-5xl">
              Make beautiful websites regardless of your
              design experience.
            </h1>
          </div>
          <h2 className="text-lg lg:text-xl font-normal text-default-500 mb-10">
            Beautiful, fast and modern React UI library.
          </h2>

          <Button
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            size="lg"
            onClick={onOpen}
          >
            Login
          </Button>

        </div>
        <div>
          <Image width="150px" src={reactLogo} />

        </div>
      </main>
    </div>
  );
};
