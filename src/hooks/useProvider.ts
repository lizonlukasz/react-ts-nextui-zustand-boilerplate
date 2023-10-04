import { provider } from '../provider';

export const useProvider = (): any => {
  if (provider === null) {
    throw new Error('You\'re trying to access eth provider outside of application');
  }

  return provider;
};
