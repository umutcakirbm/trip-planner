import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'default' | 'dark';

export interface ThemeState {
  theme: Theme;
}

export const themeSlice = createSlice({
  name: 'theme',
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
