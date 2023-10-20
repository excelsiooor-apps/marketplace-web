import { FC, ReactElement, ReactNode } from 'react';
import { IThemedComponent } from '@/lib/types';
import { AppBarComponent } from '@/components/app-bar';
import { GlobalLoaderComponent } from '@/shared-components/loaders';
import { MainContent, MainWrapper } from './main-container.styled';

interface IComponentPorps extends IThemedComponent {
  children: ReactNode | ReactElement;
}

export const MainContainer: FC<IComponentPorps> = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalLoaderComponent />
      <AppBarComponent />
      <MainContent>{children}</MainContent>
    </MainWrapper>
  );
};
