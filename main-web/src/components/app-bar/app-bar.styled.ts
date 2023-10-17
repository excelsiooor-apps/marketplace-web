import styled from 'styled-components';
import { IThemedComponent } from '@/lib/types';

interface IAppBarWrapperProps extends IThemedComponent {
  themedBackground: string;
}

export const AppBarWrapper = styled.div<IAppBarWrapperProps>`
  // Todo: provide scalable logic!
  width: 300px;
  //
  background-color: ${({ themedBackground }) => themedBackground};
  //
  height: 100vh;
`;
