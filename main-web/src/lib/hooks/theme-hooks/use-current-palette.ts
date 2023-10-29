import { useTheme } from 'styled-components';
import { AppThemesEnum } from '@/lib/constants';
import { themeSelector } from '@/lib/store';
import { useTypedSelector } from '../redux';

export const useCurrentPallete = () => {
  const { theme } = useTheme();
  const { current } = useTypedSelector(themeSelector);

  if (current) {
    return theme[current];
  }
  return theme[AppThemesEnum.LIGHT];
};
