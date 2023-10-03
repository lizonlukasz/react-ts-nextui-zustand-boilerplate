import { FC, PropsWithChildren } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Layout } from '../Layout';

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <NextUIProvider>
    <Layout>
      {children}
    </Layout>
  </NextUIProvider>
);
