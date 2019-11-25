import React from 'react';
import styled from 'styled-components';

import Section from '../elements/Section';
import SectionHeading from '../molecules/SectionHeading';
import Button from '../elements/Button';
import Flex from '../elements/Flex';

const Introduction = styled.p`
  line-height: 24px;
  margin-bottom: 128px;
`;

const AboutSection = () => {
  return (
    <Section px={[0, 5]} pt={[0, 5]} width={['100%', '60%']}>
      <SectionHeading>Harry Chan</SectionHeading>
      <Introduction>
        A self-motivated software engineer who seeks to leverage my skills
        particularly in ReactJS into a workplace environment, and anticipates to
        challenge myself as a better software engineer along my career path.
      </Introduction>
      <Flex>
        <Button
          link={'mailto:harrychanhoyin95@gmail.com'}
          borderColor={'primary'}
        >
          Email Me
        </Button>
      </Flex>
    </Section>
  );
};

export default AboutSection;
