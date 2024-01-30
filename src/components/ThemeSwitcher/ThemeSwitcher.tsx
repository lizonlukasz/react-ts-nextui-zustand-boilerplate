import { Button } from '@nextui-org/react';
import { Moon, Sun } from 'react-feather';
import { useAppStore } from '../../store';

export const ThemeSwitcher = () => {
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = () => useAppStore.setState({ theme: theme === 'dark' ? 'light' : 'dark' });

  return (
    <div className="flex gap-4 items-center">
      <Button isIconOnly color="warning" variant="light" aria-label="Like" onClick={toggleTheme}>
        {theme === 'dark' ? <Sun /> : <Moon />}
      </Button>
    </div>
  );
};
