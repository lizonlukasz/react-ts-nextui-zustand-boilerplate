import { Outlet } from 'react-router-dom';
import { Layout, PageWrapper } from 'components';

export const App = () => (
  <PageWrapper>
    <Layout>
      <Outlet />
    </Layout>
  </PageWrapper>
);
