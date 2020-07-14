/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import { DarkModeProvider } from './src/context/DarkModeContext';
import { SidebarProvider } from './src/context/SidebarContext';
import { HeaderShowProvider } from './src/context/HeaderContext';

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`);
  }
};

export const wrapRootElement = ({ element }) => (
  <Fragment>
    <Helmet>
      <meta charSet="uft-8" />
      <title>Harry Chan</title>
      <link rel="canonical" href="https://profile.harrychanhoyin95.com/" />
    </Helmet>
    <DarkModeProvider>
      <SidebarProvider>
        <HeaderShowProvider>{element}</HeaderShowProvider>
      </SidebarProvider>
    </DarkModeProvider>
  </Fragment>
);
