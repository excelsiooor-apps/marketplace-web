import { CombinedState } from '@reduxjs/toolkit';
import { IThemeSlice } from '@/lib/types';
import { TypedRootState } from '../core';

export const themeSelector = (state: CombinedState<TypedRootState>): IThemeSlice => state.theme;
