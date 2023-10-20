import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IGlobalStateSlice } from '@/lib/types';

const initialState: IGlobalStateSlice = {
  isAppLoading: false,
};

export const globalAppSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
  },
});

export const { reducer: globalAppState, actions: globalAppActions } = globalAppSlice;
