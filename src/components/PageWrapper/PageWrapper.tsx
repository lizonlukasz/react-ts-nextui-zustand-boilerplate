import { FC, PropsWithChildren } from 'react';
import { Layout } from '../Layout';

export const PageWrapper: FC<PropsWithChildren> = ({ children }) => (
  <Layout>
    {children}
  </Layout>
);
