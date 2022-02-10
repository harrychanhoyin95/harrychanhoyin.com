import * as React from 'react';
import { graphql } from 'gatsby';

import OpeningSection from './sections/OpeningSection';

import Layout from '../components/Layout/Layout';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';

const IndexPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <OpeningSection />
        <ExperienceSection />
        <ProjectSection />
        {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
      </Layout>
    </main>
  );
};

export const query = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
