import styled from 'styled-components';

interface IAppBarWrapperProps {
  themedBackground: string;
}

export const AppBarWrapper = styled.div<IAppBarWrapperProps>`
  // Todo: provide scalable logic!
  width: 300px;
  //
  background-color: ${({ themedBackground }) => themedBackground};
  //
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
