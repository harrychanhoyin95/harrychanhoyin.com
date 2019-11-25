import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import theme from '../theme';
import GlobalStyle from '../globalStyle';
import Section from '../components/elements/Section';
import AboutSection from '../components/sections/AboutSection';

const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        <AboutSection />
        <Section>Exp</Section>
        <Section>Projects</Section>
        <Section>Contact</Section>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
