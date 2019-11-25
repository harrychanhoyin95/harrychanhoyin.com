import React from 'react';

import Section from '../elements/Section';
import Heading from '../elements/Heading';

const AboutSection = () => {
  return (
    <Section>
      <div>Hello, I am </div>
      <Heading level={1}>Harry Chan</Heading>
      <div>
        A self-motivated developer who seeks to leverage my skills particularly
        in ReactJS into a workplace environment, and anticipates to challenge
        myself as a better developer along my career path.
      </div>
    </Section>
  );
};

export default AboutSection;
