import React from 'react';

import Heading from '../../components/Heading/Heading';
import Section from '../../components/Section/Section';
import Tab from '../../components/Tab/Tab';

import { useContentful } from '../../hooks/dataHooks';

const ExperienceSection = () => {
  const { experiences } = useContentful();

  const prepareData = () => {
    return experiences.map((exp) => {
      const { node } = exp;
      const {
        companyName,
        companyUrl,
        employmentPeriod,
        employmentPosition,
        jobDescription: {
          internal: { content: jdContent },
        },
      } = node;
      return {
        companyName,
        companyUrl,
        employmentPeriod,
        employmentPosition,
        jdContent: JSON.parse(jdContent),
      };
    });
  };

  return (
    <Section className="bg-sectionSecondaryColor" sectionId="experience">
      <Heading title="Experience" className="mb-8" />
      <Tab data={prepareData()} column="companyName" />
    </Section>
  );
};

export default ExperienceSection;
