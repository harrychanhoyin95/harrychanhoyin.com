import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';
import { layout, color } from 'styled-system';

import Section from '../elements/Section';
import Card from '../elements/Card';
import Flex from '../elements/Flex';
import Icon from '../elements/Icon';
import Text from '../elements/Text';
import P from '../elements/P';
import SectionHeading from '../molecules/SectionHeading';

const LogoContainer = styled.a`
  margin-right: 16px;

  ${layout}
`;

const CompanyName = styled(Text)`
  margin-bottom: 8px;
  font-weight: bold;
`;

const EmploymentPeriod = styled(Text)`
  font-style: italic;
`;

const ProjectContainer = styled.div`
  ${color}
`;

const ProjectName = styled(P)`
  margin-bottom: 4px;
  font-weight: bold;
`;

const ProjectDescription = styled(P)`
  margin-bottom: 16px;
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
                    <CompanyName>{job.companyName}</CompanyName>
                    {job.employmentPosition}
                  </Flex>
                  <EmploymentPeriod color={'greyText'} ml={[0, 'auto']}>
                    {job.employmentPeriod}
                  </EmploymentPeriod>
                </Flex>
                <ProjectContainer color={'greyText'}>
                  {job.projects.map(project => {
                    return (
                      <Flex key={project.client} flexDirection={'column'}>
                        <ProjectName>{project.client}</ProjectName>
                        <ProjectDescription>
                          {project.description}
                        </ProjectDescription>
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
