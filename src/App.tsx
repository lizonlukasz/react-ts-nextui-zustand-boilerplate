import { Navigate, Outlet } from 'react-router-dom';
import { Layout, PageWrapper } from 'components';
import { useAppStore } from './store';

export const App = () => {
  const { activeAccount } = useAppStore();
  if (!activeAccount) return <Navigate to="/" />;

  return (
    <PageWrapper>
      <Layout>
        <Outlet />
      </Layout>
    </PageWrapper>
  );
};
