import { Unsubscribe } from '@reduxjs/toolkit';
import { useEffect } from 'react';

import { store, startAppListening } from '../../redux/store';

import { setupThemeListeners } from './listeners';
import { themeActions } from './slice';

export function useThemeListener(): void {
  useEffect(() => {
    const unsubscribe: Unsubscribe = setupThemeListeners(startAppListening);
    const darkModeMediaScheme = window.matchMedia('(prefers-color-scheme: dark)');
    function handleThemeChange() {
      store.dispatch(themeActions.changeTheme(darkModeMediaScheme.matches ? 'dark' : 'default'));
    }

    handleThemeChange();
    darkModeMediaScheme.addEventListener('change', handleThemeChange);

    return () => {
      unsubscribe();
      darkModeMediaScheme.removeEventListener('change', handleThemeChange);
    };
  }, []);
}
