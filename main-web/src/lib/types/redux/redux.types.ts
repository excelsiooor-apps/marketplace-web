import { CurrentThemes } from 'styled-components';

export interface IGlobalStateSlice {
  isAppLoading: boolean;
}

export interface IThemeSlice {
  current: CurrentThemes | null;
  isThemeDefining: boolean;
}
