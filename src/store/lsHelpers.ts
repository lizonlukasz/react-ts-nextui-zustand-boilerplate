import { AppState } from 'types';

const LS_KEY = 'zustand_state';

export const persistLs = (newState: Partial<AppState>) => {
  try {
    const stateLs = window.localStorage.getItem(LS_KEY);
    const parsedState = stateLs ? JSON.parse(stateLs) : {};
    window.localStorage.setItem(LS_KEY, JSON.stringify({ ...parsedState, ...newState }));
    return newState;
  } catch (_) {
    console.log('Cannot save state to localStorage');
    return newState;
  }
};

export const getLsState = (): Partial<AppState> => {
  try {
    const stateLs = window.localStorage.getItem(LS_KEY);
    return stateLs ? JSON.parse(stateLs) : {};
  } catch (_) {
    console.log('Cannot save state to localStorage');
    return {};
  }
};
