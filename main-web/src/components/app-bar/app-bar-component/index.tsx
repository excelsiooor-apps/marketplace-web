import React, { FC } from 'react';
import { useCurrentPallete, useTypedSelector } from '@/lib/hooks';
import { themeSelector } from '@/lib/store';

import { AppBarListComponent } from './fragments';
import { AppBarWrapper } from './app-bar.styled';

export const AppBarComponent: FC = () => {
  const { current } = useTypedSelector(themeSelector);
  const palette = useCurrentPallete(current);

  const { primary } = palette;

  return (
    <AppBarWrapper themedBackground={primary.main}>
      <AppBarListComponent palette={palette} />
    </AppBarWrapper>
  );
};
