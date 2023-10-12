// import * as React from 'react';
import { NextPage } from 'next';
// import { useRouter } from 'next/router';
// import { RouterKeys } from '@/lib/constants';
import HomePage from './home';

const IndexPage: NextPage = () => {
  // const router = useRouter();
  // React.useEffect(() => {
  //   if (status === 'authenticated') {
  //     router.replace(ROUTES.HOME)
  //   } else {
  //     router.replace(ROUTES.SIGN_UP)
  //   }
  // }, [status])

  return <HomePage />;
};

export default IndexPage;
