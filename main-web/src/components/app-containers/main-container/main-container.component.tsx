import { FC, ReactElement, ReactNode } from 'react';
import { useTheme } from 'styled-components';
import { AppBarComponent } from '@/components/app-bar';
import { GlobalLoaderComponent } from '@/shared-components/loaders';
import { MainContent, MainWrapper } from './main-container.styled';

interface IComponentPorps {
  children: ReactNode | ReactElement;
}

export const MainContainer: FC<IComponentPorps> = ({ children }) => {
  const { typography } = useTheme();

  return (
    <MainWrapper className={typography.roboto.className}>
      <GlobalLoaderComponent />
      <AppBarComponent />
      <MainContent>{children}</MainContent>
    </MainWrapper>
  );
};
