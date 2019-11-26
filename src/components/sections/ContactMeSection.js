import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import SectionHeading from '../molecules/SectionHeading';
import Section from '../elements/Section';
import P from '../elements/P';
import Flex from '../elements/Flex';

const Anchor = styled.a`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  border: 1px solid;
  border-radius: 50%;
  padding: 16px;
  transition: 0.3s all;

  ${color}

  && > svg {
    height: 16px;
    width: 16px;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const ContactMeSection = () => {
  return (
    <Section bg={'sectionColor'}>
      <SectionHeading center>Get In Touch</SectionHeading>
      <P textAlign={'center'}>
        if you have anything in mind, feel free to contact me through the
        platforms as shown below:
      </P>
      <Flex justifyContent={'space-evenly'} px={[4, 8]}>
        <Anchor
          bg={'primary'}
          color={'socialIcon'}
          href="https://github.com/harrychanhoyin95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Anchor>
        <Anchor
          bg={'primary'}
          color={'socialIcon'}
          href="https://www.linkedin.com/in/harry-chan-045740b7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Anchor>
        <Anchor bg={'primary'} color={'socialIcon'} href="tel:852-6353-1210">
          <FontAwesomeIcon icon={faPhone} />
        </Anchor>
        <Anchor
          bg={'primary'}
          color={'socialIcon'}
          href="mailto:harrychanhoyin95@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </Anchor>
      </Flex>
    </Section>
  );
};

export default ContactMeSection;
