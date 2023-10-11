import { Outlet } from 'react-router-dom';
import { Layout, PageWrapper } from 'components';

export const App = () => (
  <Layout>
    <Outlet />
  </Layout>
);
