import React, { FC } from 'react';
import { useCurrentPallete, useTypedSelector } from '@/lib/hooks';
import { themeSelector } from '@/lib/store';
import { AppBarWrapper } from './app-bar.styled';

export const AppBarComponent: FC = () => {
  const { current } = useTypedSelector(themeSelector);
  const { primary } = useCurrentPallete(current);

  return <AppBarWrapper themedBackground={primary.main} />;
};
