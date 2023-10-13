import { AppTheme, useTheme } from 'styled-components';
import { AppThemesEnum } from '@/lib/constants';

export const useCurrentPallete = (currentTheme: AppThemesEnum.LIGHT | AppThemesEnum.DARK) => {
  const { theme } = useTheme();

  const currentPalette = (theme as AppTheme)[currentTheme];

  return currentPalette;
};
