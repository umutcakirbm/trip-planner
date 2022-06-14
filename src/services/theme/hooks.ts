import { Unsubscribe } from '@reduxjs/toolkit';
import { useEffect } from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { startAppListening } from '../../redux/store';

import { setupThemeListeners } from './listeners';
import { themeActions } from './slice';

export function useThemeListener(): void {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe: Unsubscribe = setupThemeListeners(startAppListening);
    const darkModeMediaScheme = window.matchMedia('(prefers-color-scheme: dark)');
    function handleThemeChange() {
      dispatch(themeActions.changeTheme(darkModeMediaScheme.matches ? 'dark' : 'default'));
    }

    handleThemeChange();
    darkModeMediaScheme.addEventListener('change', handleThemeChange);

    return () => {
      unsubscribe();
      darkModeMediaScheme.removeEventListener('change', handleThemeChange);
    };
  }, []);
}
