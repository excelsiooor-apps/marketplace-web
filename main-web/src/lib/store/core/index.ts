import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { theme } from '../slices/theme.slice';
import { globalAppState } from '../slices/global-state.slice';

export const rootReducer = combineReducers({
  theme,
  globalAppState,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type TypedRootState = ReturnType<typeof rootReducer>;
export type TypedAppStore = ReturnType<typeof setupStore>;
export type TypedDispatch = TypedAppStore['dispatch'];
