import { CurrentThemes } from 'styled-components';
import { AppThemesEnum, StorageThemeEnum } from '@/lib/constants';

export const defineCurrentTheme = (): CurrentThemes => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return (
      (window?.localStorage?.getItem(StorageThemeEnum.CURRENT_THEME) as CurrentThemes | null) ?? AppThemesEnum.LIGHT
    );
  }
  return AppThemesEnum.LIGHT;
};
