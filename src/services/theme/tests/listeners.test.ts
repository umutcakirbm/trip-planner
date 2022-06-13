import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';

import { setupThemeListeners } from '../listeners';
import { themeActions, themeSlice, Theme } from '../slice';

import type { AppStartListening } from '../../../redux/store';

describe('theme - listeners', () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onMiddlewareError = jest.fn((): void => {});
  const listenerMiddlewareInstance = createListenerMiddleware({
    onError: onMiddlewareError,
  });

  function setupTestStore() {
    return configureStore({
      reducer: {
        [themeSlice.name]: themeSlice.reducer,
      },
      middleware: (gDM) => gDM().prepend(listenerMiddlewareInstance.middleware),
    });
  }

  let store = setupTestStore();

  beforeEach(() => {
    listenerMiddlewareInstance.clearListeners();
    onMiddlewareError.mockClear();
    store = setupTestStore();

    setupThemeListeners(listenerMiddlewareInstance.startListening as AppStartListening);
  });

  describe('onChangeTheme', () => {
    const theme: Theme = 'default';

    it('changes theme and adds class name to <html> element', async () => {
      store.dispatch(themeActions.changeTheme(theme));
      expect(document.documentElement.className).toBe(`theme theme--${theme}`);
    });
  });
});
