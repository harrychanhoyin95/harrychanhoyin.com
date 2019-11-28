import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { grid, border, color } from 'styled-system';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import SectionHeader from '../molecules/SectionHeading';
import Section from '../elements/Section';
import Flex from '../elements/Flex';
import P from '../elements/P';
import Heading from '../elements/Heading';

const Grid = styled.div`
  display: grid;
  grid-gap: 16px;

  ${grid}
`;

const Card = styled(Flex)`
  border: 1px solid;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  ${border}
`;

const Image = styled(Img)``;

const StyledFlex = styled(Flex)`
  margin-top: auto;
`;

const Anchor = styled.a`
  ${color}
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 16px;
`;

const ProjectSection = () => {
  const data = useStaticQuery(graphql`
    query ProjectSectionQuery {
      allContentfulProject(sort: { fields: [updatedAt], order: DESC }) {
        edges {
          node {
            techStack
            name
            description
            githubUrl
            hostUrl
            image {
              sizes(maxWidth: 500) {
                ...GatsbyContentfulSizes
              }
            }
          }
        }
      }
    }
  `);

  const projectData = get(data, 'allContentfulProject.edges', null);

  return (
    <Section name={'project'}>
      <SectionHeader>Projects</SectionHeader>
      <Grid gridTemplateColumns={['1fr', '1fr 1fr 1fr']}>
        {projectData.map(project => {
          const pDetail = project.node;
          const sizes = pDetail.image.sizes;
          return (
            <Card
              flexDirection={'column'}
              key={pDetail.name}
              borderColor="text"
            >
              <Image sizes={sizes} />
              <Flex flexDirection={'column'} px={3}>
                <Heading level={4}>{pDetail.name}</Heading>
                <P color={'heading'}>{pDetail.description}</P>
                <P>Skills Used: {pDetail.techStack}</P>
              </Flex>
              <StyledFlex px={3} pb={3}>
                <Anchor href={pDetail.githubUrl} color={'heading'}>
                  <Icon icon={faGithub} size={'2x'} />
                </Anchor>
                {pDetail.hostUrl ? (
                  <Anchor href={pDetail.hostUrl} color={'heading'}>
                    <Icon icon={faExternalLinkAlt} size={'2x'} />
                  </Anchor>
                ) : (
                  <Fragment />
                )}
              </StyledFlex>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default ProjectSection;
