import { configureStore, createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit';

import { themeSlice } from '../services/theme/slice';

const listenerMiddlewareInstance = createListenerMiddleware({
  // eslint-disable-next-line no-console
  onError: () => console.error,
});

export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
  },
  middleware: (gDM) => gDM().prepend(listenerMiddlewareInstance.middleware),
});

export const startAppListening = listenerMiddlewareInstance.startListening as AppStartListening;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
