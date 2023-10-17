import { FC, ReactElement, ReactNode } from 'react';
import { GlobalLoaderComponent } from 'src/components/loaders';
import { IThemedComponent } from '@/lib/types';
import { MainWrapper } from './main-container.styled';
import { AppBarComponent } from '../../app-bar/app-bar.component';

interface IComponentPorps extends IThemedComponent {
  children: ReactNode | ReactElement;
}

export const MainContainer: FC<IComponentPorps> = ({ children }) => {
  return (
    <MainWrapper>
      <GlobalLoaderComponent />
      <AppBarComponent />
      <div>{children}</div>
    </MainWrapper>
  );
};
