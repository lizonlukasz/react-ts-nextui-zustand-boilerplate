import { Button } from '@nextui-org/react';
import { Moon, Sun } from 'react-feather';
import { useAppStore } from '../../store';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useAppStore();

  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly color="warning" variant="light" aria-label="Like" onClick={toggleTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
