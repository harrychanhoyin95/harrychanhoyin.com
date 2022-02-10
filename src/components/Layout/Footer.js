import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Heading from '../Heading/Heading';
import Section from '../../components/Section/Section';

const Footer = () => {
  return (
    <footer>
      <Section className="bg-sectionSecondaryColor" sectionId="footer">
        <Heading title="Get in touch" className="mb-4" />
        <div className="text-descriptionColor mb-8">
          if you have anything in mind, feel free to contact me through the
          platforms as shown below:
        </div>
        <div className='flex'>
          <a
            className="rounded-full w-8 h-8 flex bg-primary p-4 justify-center items-center content-center mr-4"
            href="https://github.com/harrychanhoyin95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
          </a>
          <a
            className="rounded-full w-8 h-8 flex bg-primary p-4 justify-center items-center content-center mr-4"
            href="https://www.linkedin.com/in/harry-chan-045740b7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
          </a>
          <a
            href="mailto:harrychanhoyin95@gmail.com"
            className="rounded-full w-8 h-8 flex bg-primary p-4 justify-center items-center content-center mr-4"
          >
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
          </a>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
