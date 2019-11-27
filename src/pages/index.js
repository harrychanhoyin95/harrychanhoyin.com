import React, { useState } from 'react';

import Layout from '../components/layout';
import OpeningSection from '../components/sections/OpeningSection';
import AboutMeSection from '../components/sections/AboutMeSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import ContactMeSection from '../components/sections/ContactMeSection';

const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
      <OpeningSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactMeSection />
    </Layout>
  );
};

export default IndexPage;
