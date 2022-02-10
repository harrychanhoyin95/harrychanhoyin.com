import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Heading from '../../components/Heading/Heading';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';

import { useContentful } from '../../hooks/dataHooks';

const Project = () => {
  const { projects } = useContentful();

  const renderProjects = () => {
    return projects.map((proj) => {
      const { name, description, image, githubUrl, hostUrl } = proj;
      return (
        <div key={name} className="grid pt-12 md:py-12 md:grid-cols-[1fr_1fr]">
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={name}
            className="rounded"
          />
          <div className="text-descriptionColor flex flex-col justify-center pt-8 md:pl-12 md:pt-0">
            <div className="text-white font-bold mb-2">{name}</div>
            <div className="mb-6 md:mb-12">{description}</div>
            <div className="flex">
              <Button
                title="View Github"
                linkSrc={githubUrl}
                className="px-4 py-4 w-1/2 md:py-3 md:px-8 my-0 mx-auto"
                isLink
                isReversed
              />
              <Button
                title="View Website"
                linkSrc={hostUrl}
                className="px-4 py-4 w-1/2 md:py-3 md:px-8 ml-4"
                isLink
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Section className="bg-sectionPrimaryColor" sectionId="project">
      <Heading title="Projects" className="mb-8" isPrimary />
      {renderProjects()}
    </Section>
  );
};

export default Project;
