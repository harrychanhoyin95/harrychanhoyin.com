import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Section from '../../components/Section/Section';

import CV from '../../assets/CV_HarryChan.pdf';

const OpeningSection = () => {
  return (
    <Section
      className="bg-sectionPrimaryColor flex flex-col-reverse md:flex-row"
      sectionId="opening"
    >
      <div className="py-28 md:w-1/2">
        <div className="mb-8">
          <Heading title="Hi, I'm Harry" isPrimary />
          <div className="text-descriptionColor">
            A professional Software Engineer from Hong Kong 🇭🇰
          </div>
        </div>
        <div className="grid gap-x-8 md:grid-cols-2 md:pr-8">
          <Button
            title="Resume"
            className="px-4 mb-4 md:mb-0"
            linkSrc={CV}
            isLink
            isReversed
          />
          <Button
            title="Contact Me"
            className="px-4"
            linkSrc={'mailto:harrychanhoyin95@gmail.com'}
            isLink
          />
        </div>
      </div>
      <div className="flex items-center md:pl-20 md:w-1/2">
        <StaticImage
          className="rounded-full"
          src="../../images/profile.png"
          alt="Profile"
          aspectRatio={1}
        />
      </div>
    </Section>
  );
};

export default OpeningSection;
