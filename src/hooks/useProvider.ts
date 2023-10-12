import { provider } from '../provider';

export const useProvider = () => {
  if (provider === null) {
    throw new Error('You\'re trying to access eth provider outside of application');
  }

  return provider;
};
