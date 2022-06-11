import { Unsubscribe } from '@reduxjs/toolkit';

import { themeActions } from './slice';

import type { AppStartListening } from '../../redux/store';

function onChangeTheme(action: ReturnType<typeof themeActions.changeTheme>) {
  document.documentElement.className = 'theme';
  document.documentElement.classList.add(`theme--${action.payload}`);
}

export function setupThemeListeners(startListening: AppStartListening): Unsubscribe {
  const listeners = [
    startListening({
      actionCreator: themeActions.changeTheme,
      effect: onChangeTheme,
    }),
  ];

  return () => listeners.forEach((unsubscribe) => unsubscribe());
}
