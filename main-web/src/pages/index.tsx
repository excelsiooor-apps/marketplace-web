import * as React from 'react';
import { NextPage } from 'next';
import { useDefinedTheme } from '@/lib/hooks';
import HomePage from './home';

const IndexPage: NextPage = () => {
  useDefinedTheme();

  // Todo: provide auto redirecting logic for app by Router
  return <HomePage />;
};

export default IndexPage;
