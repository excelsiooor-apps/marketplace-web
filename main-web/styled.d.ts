// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export type CurrentThemes = 'light' | 'dark';
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
    current: CurrentThemes;
    light: Palette;
    dark: Palette;
  }
  export interface GlobalAppTheme {
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
  }
}
