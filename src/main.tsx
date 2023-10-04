import React, { FC, PropsWithChildren, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, Contact, LandingPage } from 'views';
import { App } from './App';
import './index.css';
import { useAppStore } from './store';
import { Entrypoint } from './components/Entrypoint';
import { NextUIProvider } from '@nextui-org/react';

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
        path: 'contact',
        element: <Contact />,
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
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <NextUIProvider>
      {children}
    </NextUIProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUiWrapper>
      <Entrypoint>
        <RouterProvider router={router} />
      </Entrypoint>
    </NextUiWrapper>
  </React.StrictMode>,
);