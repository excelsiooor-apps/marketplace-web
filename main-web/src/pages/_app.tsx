import React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import isPropValid from '@emotion/is-prop-valid';
import { GlobalStyles, theme } from '@/lib/theme';
import { setupStore } from '@/lib/store/core';
import { ErrorBoundary } from '@/components/app-containers';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity,
    },
  },
});

const store = setupStore();

const AppWrapper = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <StyleSheetManager
        enableVendorPrefixes
        shouldForwardProp={(propName, elementToBeRendered) => {
          return typeof elementToBeRendered === 'string' ? isPropValid(propName) : true;
        }}
      >
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Toaster position="top-center" reverseOrder={false} />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </StyleSheetManager>
    </Provider>
  </QueryClientProvider>
);

export default AppWrapper;
