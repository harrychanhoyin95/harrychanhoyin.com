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
        <SectionHeading>I&apos;m Harry</SectionHeading>
        <Introduction mb={3} color="subHeading">
          Web-application software engineer
        </Introduction>
        <Flex width={'50%'}>
          <Button
            link={'mailto:harrychanhoyin95@gmail.com'}
            width={['100%', '50%']}
          >
            Hire Me
          </Button>
        </Flex>
      </Container>
    </Section>
  );
};

export default AboutSection;
