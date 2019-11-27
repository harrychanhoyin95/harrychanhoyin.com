/* eslint-disable react/prop-types */
import React from 'react';
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
  <DarkModeProvider>
    <SidebarProvider>
      <HeaderShowProvider>{element}</HeaderShowProvider>
    </SidebarProvider>
  </DarkModeProvider>
);
