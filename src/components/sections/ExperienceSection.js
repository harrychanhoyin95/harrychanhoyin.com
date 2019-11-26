import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';
import { layout, color } from 'styled-system';

import Section from '../elements/Section';
import Card from '../elements/Card';
import Flex from '../elements/Flex';
import Icon from '../elements/Icon';
import P from '../elements/P';
import SectionHeading from '../molecules/SectionHeading';

const LogoContainer = styled.a`
  margin-right: 16px;

  ${layout}
`;

const ProjectContainer = styled.div`
  ${color}
`;

const ExperienceSection = () => {
  const data = useStaticQuery(graphql`
    query ExperienceSectionQuery {
      allContentfulExperience {
        edges {
          node {
            companyName
            employmentPeriod
            employmentPosition
            companyDescription
            projects {
              description
              client
            }
            companyLogo {
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  const experiences = get(data, 'allContentfulExperience.edges', null);

  return (
    <Section px={[0, 5]} pb={[2, 4]}>
      <SectionHeading>Experience</SectionHeading>
      {experiences.map(experience => {
        const job = get(experience, 'node', null);
        return (
          <Card key={job.companyName} borderColor="transparent" mb={4}>
            <Flex>
              <LogoContainer
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                display={['none', 'block']}
              >
                <Icon src={`https:${job.companyLogo.file.url}`} />
              </LogoContainer>
              <div>
                <Flex mb={4} flexDirection={['column', 'row']}>
                  <Flex
                    mb={[2, 0]}
                    flexDirection={'column'}
                    width={['100%', '50%']}
                  >
                    <P fontWeight={'bold'} mb={2}>
                      {job.companyName}
                    </P>
                    <P mb={0}>{job.employmentPosition}</P>
                  </Flex>
                  <P fontStyle={'italic'} color={'greyText'} ml={[0, 'auto']}>
                    {job.employmentPeriod}
                  </P>
                </Flex>
                <ProjectContainer color={'greyText'}>
                  {job.projects.map(project => {
                    return (
                      <Flex key={project.client} flexDirection={'column'}>
                        <P fontWeight={'bold'} mb={1}>
                          {project.client}
                        </P>
                        <P mb={3}>{project.description}</P>
                      </Flex>
                    );
                  })}
                </ProjectContainer>
              </div>
            </Flex>
          </Card>
        );
      })}
    </Section>
  );
};

export default ExperienceSection;
