import { User } from '@nextui-org/react';
import { useAppStore } from '../../store';

export const AccountDetails = () => {
  const { activeAccount } = useAppStore();

  if (!activeAccount) return null;

  return (
    <User
      name={activeAccount}
      description="TBA"
      avatarProps={{
        src: 'https://picsum.photos/200',
      }}
    />
  );
};
