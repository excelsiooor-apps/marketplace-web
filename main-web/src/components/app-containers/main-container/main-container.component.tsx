import { FC, ReactElement, ReactNode, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { AppBarComponent } from '@/components/app-bar';
import { GlobalLoaderComponent } from '@/shared-components/loaders';
import { useDimensions } from '@/lib/hooks';
import { MainContent, MainWrapper } from './main-container.styled';

interface IComponentPorps {
  children: ReactNode | ReactElement;
}

export const MainContainer: FC<IComponentPorps> = ({ children }) => {
  const { typography } = useTheme();
  const [ref, { width }] = useDimensions({ liveMeasure: true });

  return (
    <MainWrapper ref={ref} className={typography.roboto.className}>
      <GlobalLoaderComponent />
      <AppBarComponent />
      <MainContent>{children}</MainContent>
    </MainWrapper>
  );
};
