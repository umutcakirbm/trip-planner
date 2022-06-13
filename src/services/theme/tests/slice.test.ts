import { configureStore } from '@reduxjs/toolkit';

import { themeActions, themeSlice, Theme } from '../slice';

describe('theme - slice', () => {

  function setupTestStore() {
    return configureStore({
      reducer: {
        [themeSlice.name]: themeSlice.reducer,
      },
    });
  }

  let store = setupTestStore();

  beforeEach(() => {
    store = setupTestStore();
  });

  describe('reducers - changeTheme', () => {
    const theme: Theme = 'dark';

    it('changes theme to dark', () => {
      store.dispatch(themeActions.changeTheme(theme));
      expect(store.getState()[themeSlice.name]?.theme).toBe(theme);
    });
  });
});
