import { FC, ReactElement, ReactNode } from 'react';
import { IThemedComponent } from '@/lib/types';

interface IComponentPorps extends IThemedComponent {
  children: ReactNode | ReactElement;
}

export const MainContainer: FC<IComponentPorps> = ({ children }) => {
  return children;
};
