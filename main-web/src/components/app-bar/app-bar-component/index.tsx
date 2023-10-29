import React, { FC } from 'react';
import { useCurrentPallete } from '@/lib/hooks';
import { AppBarListComponent } from './fragments';
import { AppBarWrapper } from './app-bar.styled';

export const AppBarComponent: FC = () => {
  const palette = useCurrentPallete();

  const { primary } = palette;

  return (
    <AppBarWrapper themedBackground={primary.main}>
      <AppBarListComponent palette={palette} />
    </AppBarWrapper>
  );
};
