import { configureStore, createListenerMiddleware, TypedStartListening } from '@reduxjs/toolkit';

import { datesApi } from '../services/apis/date/api';
import { locationApi } from '../services/apis/location/api';
import { productApi } from '../services/apis/product/api';
import { themeSlice } from '../services/theme/slice';

const listenerMiddlewareInstance = createListenerMiddleware({
  // eslint-disable-next-line no-console
  onError: () => console.error,
});

export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [datesApi.reducerPath]: datesApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (gDM) =>
    gDM().concat([
      listenerMiddlewareInstance.middleware,
      locationApi.middleware,
      datesApi.middleware,
      productApi.middleware,
    ]),
});

export const startAppListening = listenerMiddlewareInstance.startListening as AppStartListening;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
