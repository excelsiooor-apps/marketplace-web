// styled.d.ts
import 'styled-components';
import { NextFont } from '@next/font';
import { AppThemesEnum } from '@/lib/constants';

declare module 'styled-components' {
  export type CurrentThemes = AppThemesEnum.LIGHT | AppThemesEnum.DARK;
  export interface ColorPallete {
    main: string;
    soft: string;
    deep: string;
    contrast: string;
  }
  export interface Palette {
    primary: ColorPallete;
    secondary: ColorPalette;
  }
  export interface AppTheme {
    light: Palette;
    dark: Palette;
  }
  export interface DefaultTheme {
    theme: AppTheme;
    breakpoints: {
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };
    indexes: {
      modal: number;
      loader: number;
    };
    typography: {
      roboto: NextFont;
    };
  }
}
