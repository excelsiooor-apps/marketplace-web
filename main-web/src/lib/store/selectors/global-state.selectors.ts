import { CombinedState } from '@reduxjs/toolkit';
import { IGlobalStateSlice } from '@/lib/types';
import { TypedRootState } from '../core';

export const globalStateSelector = (state: CombinedState<TypedRootState>): IGlobalStateSlice => state.globalAppState;
