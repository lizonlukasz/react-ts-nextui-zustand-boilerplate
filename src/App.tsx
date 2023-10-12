import { Outlet } from 'react-router-dom';
import { Layout } from 'components';

export const App = () => (
  <Layout>
    <Outlet />
  </Layout>
);
