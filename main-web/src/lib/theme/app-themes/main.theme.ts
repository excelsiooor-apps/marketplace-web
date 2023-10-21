import { DefaultTheme } from 'styled-components';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

// TODO: provide logic to setup a default theme

export const theme: DefaultTheme = {
  theme: {
    // TODO: light dark theme colors
    light: {
      primary: {
        main: '#DDBEAA',
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
  indexes: {
    modal: 800,
    loader: 900,
  },
  typography: {
    roboto,
  },
};
