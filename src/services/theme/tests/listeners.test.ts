import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

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
    listenerMiddlewareInstance.clearListeners(); // Stops and cancels active listeners https://redux-toolkit.js.org/api/createListenerMiddleware#clearlisteners
    onMiddlewareError.mockClear(); // https://jestjs.io/docs/mock-function-api#mockfnmockclear
    store = setupTestStore(); // resets store state

    setupThemeListeners(listenerMiddlewareInstance.startListening as AppStartListening);
  });

  describe('onChangeTheme', () => {
    const theme: Theme = 'default';

    it('changes theme and adds class name to <html> element', async () => {
      store.dispatch(themeActions.changeTheme(theme));

      await act(() =>
        waitFor(() => {
          expect(document.documentElement.className).toBe(`theme theme--${theme}`);
        }),
      );
    });
  });
});
