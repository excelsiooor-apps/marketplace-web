import { useTheme } from 'styled-components';
import { AppThemesEnum } from '@/lib/constants';

export const useCurrentPallete = (currentTheme: AppThemesEnum.LIGHT | AppThemesEnum.DARK | null) => {
  const { theme } = useTheme();
  if (currentTheme) {
    return theme[currentTheme];
  }
  return theme[AppThemesEnum.LIGHT];
};
