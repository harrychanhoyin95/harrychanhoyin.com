import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/layout';
import theme from '../theme';
import GlobalStyle from '../globalStyle';
import OpeningSection from '../components/sections/OpeningSection';
import AboutMeSection from '../components/sections/AboutMeSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import ContactMeSection from '../components/sections/ContactMeSection';

const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle sidebarOpen={sidebarOpen} />
      <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        <OpeningSection />
        <AboutMeSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactMeSection />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;
