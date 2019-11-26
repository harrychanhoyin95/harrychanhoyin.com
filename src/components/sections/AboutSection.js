import React from 'react';
import styled from 'styled-components';
import { layout } from 'styled-system';

import Section from '../elements/Section';
import SectionHeading from '../molecules/SectionHeading';
import Button from '../elements/Button';
import Flex from '../elements/Flex';
import P from '../elements/P';

const Introduction = styled(P)`
  line-height: 24px;
`;

const Container = styled.div`
  ${layout}
`;

const AboutSection = () => {
  return (
    <Section pt={[3, 5]} bg="sectionColor">
      <Container width={['100%', '60%']}>
        <SectionHeading>Harry Chan</SectionHeading>
        <Introduction mb={5}>
          A self-motivated software engineer who seeks to leverage my skills
          particularly in ReactJS into a workplace environment, and anticipates
          to challenge myself as a better software engineer along my career
          path.
        </Introduction>
        <Flex>
          <Button link={'mailto:harrychanhoyin95@gmail.com'}>Hire Me</Button>
        </Flex>
      </Container>
    </Section>
  );
};

export default AboutSection;
