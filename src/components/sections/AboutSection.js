import React from 'react';
import styled from 'styled-components';
import { typography } from 'styled-system';

import Section from '../elements/Section';
import Heading from '../elements/Heading';
import Button from '../elements/Button';
import Flex from '../elements/Flex';

const StyledHeading = styled(Heading)`
  ${typography}
`;

const Introduction = styled.p`
  line-height: 24px;
`;

const AboutSection = () => {
  return (
    <Section px={[0, 5]} pt={[0, 5]} width={['100%', '70%']}>
      <StyledHeading level={1} fontSize={40} mt={0} mb={3}>
        Harry Chan
      </StyledHeading>
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
