import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Slices } from '../../enums/slices';

export type Theme = 'default' | 'dark';

export interface ThemeState {
  theme: Theme;
}

export const themeSlice = createSlice({
  name: Slices.THEME,
  initialState: {
    theme: 'default',
  } as ThemeState,
  reducers: {
    changeTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
