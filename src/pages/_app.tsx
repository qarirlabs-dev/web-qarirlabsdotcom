import { useEffect } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';

import { Footer } from '../components/layout/Footer';

import '../styles/global.css';

export type NextPageWithLayout = NextPage & {
  withoutFooter?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  useEffect(() => {
    const gtmArgs = {
      gtmId: 'GTM-KPXQ7H9',
    };

    TagManager.initialize(gtmArgs);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      {Component.withoutFooter ? '' : <Footer />}
    </>
  );
};

export default MyApp;
