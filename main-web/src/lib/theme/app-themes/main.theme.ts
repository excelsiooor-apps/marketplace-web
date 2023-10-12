import { GlobalAppTheme, CurrentThemes } from 'styled-components';
import { AppThemesEnum, StorageThemeEnum } from '@/lib/constants';

const currentTheme =
  (window.localStorage.getItem(StorageThemeEnum.CURRENT_THEME) as CurrentThemes) ?? AppThemesEnum.LIGHT;

export const theme: GlobalAppTheme = {
  theme: {
    current: currentTheme,
    // TODO: light dark theme colors
    light: {
      primary: {
        main: '',
        soft: '',
        deep: '',
        contrast: '',
      },
      secondary: {
        main: '',
        soft: '',
        deep: '',
        contrast: '',
      },
    },
    // TODO: provide dark theme colors
    dark: {
      primary: {
        main: '',
        soft: '',
        deep: '',
        contrast: '',
      },
      secondary: {
        main: '',
        soft: '',
        deep: '',
        contrast: '',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 425,
      md: 768,
      lg: 1200,
      xl: 2560,
    },
  },
};
