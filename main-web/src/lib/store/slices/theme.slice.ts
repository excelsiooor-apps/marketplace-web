import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CurrentThemes } from 'styled-components';
import { IThemeSlice } from '@/lib/types';

const initialState: IThemeSlice = {
  current: null,
  isThemeDefining: false,
};

export const themeSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentTheme: (state, action: PayloadAction<CurrentThemes>) => {
      state.current = action.payload;
    },
    setIsThemeDefining: (state, action: PayloadAction<boolean>) => {
      state.isThemeDefining = action.payload;
    },
  },
});

export const { reducer: theme, actions: themeActions } = themeSlice;
