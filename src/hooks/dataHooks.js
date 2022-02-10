import { useStaticQuery, graphql } from 'gatsby';

export const useContentful = () => {
  const { allContentfulHeader, allContentfulExperience, allContentfulProject } =
    useStaticQuery(
      graphql`
        query ContentfulData {
          allContentfulHeader {
            edges {
              node {
                headerItems {
                  items
                }
              }
            }
          }
          allContentfulExperience {
            edges {
              node {
                companyName
                companyUrl
                employmentPeriod
                employmentPosition
                jobDescription {
                  internal {
                    content
                  }
                }
              }
            }
          }
          allContentfulProject {
            nodes {
              name
              description
              githubUrl
              secondGithubUrl
              hostUrl
              image {
                gatsbyImageData(width: 500)
              }
            }
          }
        }
      `
    );

  const data = {
    headerItems: allContentfulHeader.edges[0].node.headerItems.items,
    experiences: allContentfulExperience.edges,
    projects: allContentfulProject.nodes,
  };
  return data;
};
