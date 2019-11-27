import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Section from '../elements/Section';
import SectionHeading from '../molecules/SectionHeading';
import Button from '../elements/Button';
import Flex from '../elements/Flex';
import P from '../elements/P';

const Introduction = styled(P)`
  line-height: 24px;
`;

const Image = styled(Img)`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query MyPhotoQuery {
      desktop: file(relativePath: { eq: "harry-chan.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <Section pt={[4, 7]} bg={'sectionColor'} name={'opening'}>
      <Flex flexDirection={['column', 'row']}>
        <Flex
          flexDirection={'column'}
          width={['100%', '50%']}
          justifyContent={'center'}
          mb={[4, 0]}
        >
          <SectionHeading>I&apos;m Harry</SectionHeading>
          <Introduction mb={3} color="subHeading">
            Web-application software engineer
          </Introduction>
          <Button
            link={'mailto:harrychanhoyin95@gmail.com'}
            width={['100%', '50%']}
          >
            Hire Me
          </Button>
        </Flex>
        <Flex width={['100%', '50%']}>
          <Image fluid={imageData} />
        </Flex>
      </Flex>
    </Section>
  );
};

export default AboutSection;
