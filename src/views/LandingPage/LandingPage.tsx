import { FC } from 'react';
import {
  Button, Image, Navbar, NavbarContent, NavbarItem, useDisclosure,
} from '@nextui-org/react';
import reactLogo from 'assets/react.svg';
import { Link } from 'react-router-dom';
import { LoginModal } from 'components/LoginModal/LoginModal';
import { ThemeSwitcher } from 'components/ThemeSwitcher';

export const LandingPage: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const buttonText = 'Login';

  return (
    <div
      className="max-w-screen h-full min-h-screen flex flex-col items-center"
    >
      <Navbar position="sticky">
        <NavbarContent justify="end">
          <ThemeSwitcher />
          <NavbarItem>
            <Button
              color="primary"
              variant="flat"
              onClick={onOpen}
              disabled={false}
            >
              {buttonText}
            </Button>
          </NavbarItem>
          <NavbarItem>
            <LoginModal isOpen={isOpen} setIsOpen={onOpenChange} />
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
            disabled={false}
          >
            {buttonText}
          </Button>

          <Button as={Link} to="/app" variant="light" size="lg">
            Go to App
          </Button>

        </div>
        <div>
          <Image width="150px" src={reactLogo} />

        </div>
      </main>
    </div>
  );
};
