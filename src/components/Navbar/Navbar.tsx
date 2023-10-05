import { forwardRef } from 'react';
import {
  Navbar as NavbarNext, NavbarBrand, NavbarContent, NavbarItem, Button,
} from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher';

const CustomNavLink = forwardRef<any, any>(
  ({ activeClassName, activeStyle, ...props }, ref) => (
    <NavLink
      ref={ref}
      {...props}
      className={({ isActive }) => [
        props.className,
        isActive ? 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg' : null,
      ]
        .filter(Boolean)
        .join(' ')}
      style={({ isActive }) => ({
        ...props.style,
        ...(isActive ? activeStyle : null),
      })}
    />
  ),
);

interface NavItem {
  to: string;
  displayName: string;
}

const navigation: NavItem[] = [
  { to: '/app', displayName: 'Home' },
  { to: '/app/contact', displayName: 'Contact' },
];

export const Navbar = () => (
  <NavbarNext isBordered>
    <NavbarBrand>
      <p className="font-bold text-inherit">LOGO</p>
    </NavbarBrand>
    <NavbarContent className="w-[1480px] hidden sm:flex gap-4" justify="center">
      {navigation.map(({ to, displayName }) => (

        <NavbarItem key={to}>
          <Button as={CustomNavLink} to={to} color="primary" href="#" variant="light" className="font-semibold">
            {displayName}
          </Button>
        </NavbarItem>
      ))}
    </NavbarContent>
    <NavbarContent justify="end">
      <ThemeSwitcher />
      <NavbarItem>
        Account Placeholder
      </NavbarItem>
    </NavbarContent>
  </NavbarNext>
);
