import { Outlet, Navigate } from 'react-router-dom';
import { Layout } from 'components';
import { useAppStore } from './store';

export const App = () => {
  const { activeAccount } = useAppStore();
  if (!activeAccount) return <Navigate to="/" />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
