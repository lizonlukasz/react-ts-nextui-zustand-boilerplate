import { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { useAppStore } from '../../store';

export const Layout: FC<PropsWithChildren> = () => {
  const { theme } = useAppStore();
  return (
  // eslint-disable-next-line max-len
    <div className={`${theme} text-foreground bg-background max-w-screen h-full min-h-screen flex flex-col items-center`}>
      <Navbar />
      <main className="xl:w-[1280px] w-screen p-8">
        <Outlet />
      </main>
    </div>
  );
};
