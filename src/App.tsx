import { Outlet } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Layout } from 'components';

export const App = () => (
  <NextUIProvider>
    <Layout>
      <Outlet />
    </Layout>
  </NextUIProvider>
);
