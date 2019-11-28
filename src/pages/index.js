import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import OpeningSection from '../components/sections/OpeningSection';
import AboutMeSection from '../components/sections/AboutMeSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectSection from '../components/sections/ProjectSection';
import ContactMeSection from '../components/sections/ContactMeSection';
import SidebarContext from '../context/SidebarContext';

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => (
        <Helmet>
          <meta charSet="uft-8" />
          <title>Harry Chan</title>
          <link rel="canonical" href="https://harrychanhoyin95.com/" />
          <SidebarContext.Consumer>
            {data => {
              const { sidebarOpen, toggleSidebarOpen } = data;
              return (
                <Layout
                  sidebarOpen={sidebarOpen}
                  toggleSidebarOpen={toggleSidebarOpen}
                >
                  <OpeningSection />
                  <AboutMeSection />
                  <ExperienceSection />
                  <ProjectSection />
                  <ContactMeSection />
                </Layout>
              );
            }}
          </SidebarContext.Consumer>
        </Helmet>
      )}
    />
  );
};

export default IndexPage;
