import React, { FC, PropsWithChildren, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, DummyView, LandingPage } from 'views';
import { NextUIProvider } from '@nextui-org/react';
import { App } from './App';
import './index.css';
import { useAppStore } from './store';

declare global {
  interface Window {
    ethereum: any;
  }
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'dummy',
        element: <DummyView />,
      },
    ],
  },
]);

const NextUiWrapper: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useAppStore();

  useEffect(() => {
    const { body } = document;
    if (theme === 'dark') body.classList.add('dark');
    else body.classList.remove('dark');
  }, [theme]);

  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUiWrapper>
      <RouterProvider router={router} />
    </NextUiWrapper>
  </React.StrictMode>,
);
