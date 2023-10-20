import { FC } from 'react';
import { useTheme } from 'styled-components';
import { useTypedSelector } from '@/lib/hooks';
import { globalStateSelector, themeSelector } from '@/lib/store';
import { GlobalLoaderWrapper, Spinner } from './global-loader.styled';

export const GlobalLoaderComponent: FC = () => {
  const { isThemeDefining } = useTypedSelector(themeSelector);
  const { isAppLoading } = useTypedSelector(globalStateSelector);
  const { indexes } = useTheme();

  const isLoading = isThemeDefining || isAppLoading;

  if (isLoading)
    return (
      <GlobalLoaderWrapper index={indexes.loader}>
        <Spinner index={indexes.loader}>...Spinner</Spinner>
      </GlobalLoaderWrapper>
    );

  return null;
};
