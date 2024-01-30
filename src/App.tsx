import { Outlet, Navigate } from 'react-router-dom';
import { Layout } from 'components';
import { useAppStore } from './store';

export const App = () => {
  const activeAccount = useAppStore((state) => state.activeAccount);
  if (!activeAccount) return <Navigate to="/" />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
