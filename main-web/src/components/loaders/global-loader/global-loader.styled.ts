import styled from 'styled-components';

interface IGlobalLoaderWrapper {
  index: number;
}

export const GlobalLoaderWrapper = styled.div<IGlobalLoaderWrapper>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  //
  backdrop-filter: blur(10px);
  z-index: ${({ index }) => index - 1};
`;

export const Spinner = styled.div<IGlobalLoaderWrapper>`
  z-index: ${({ index }) => index};
  width: 100%;
  //temp
  text-align: center;
`;
