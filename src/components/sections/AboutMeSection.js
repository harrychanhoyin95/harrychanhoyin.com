import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { layout } from 'styled-system';

import Section from '../elements/Section';
import Flex from '../elements/Flex';
import Button from '../elements/Button';
import P from '../elements/P';
import SectionHeading from '../molecules/SectionHeading';
import { scrollTo } from '../../utils/scroller';
import CV from '../../assets/CV-HarryChan.pdf';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  position: relative;

  ${layout}
`;

const Image = styled(Img)`
  opacity: 0.1;
`;

const HeadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

const StyledFlex = styled(Flex)`
  margin: auto;
`;

const AboutMeSection = () => {
  const data = useStaticQuery(graphql`
    query AboutMeQuery {
      desktop: file(relativePath: { eq: "aboutMe.png" }) {
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
    <Section name={'aboutMe'}>
      <Flex flexDirection={['column', 'row']}>
        <ImageContainer width={['100%', '50%']}>
          <Image fluid={imageData} />
          <HeadingWrapper>
            <SectionHeading overlay width={'overlay'}>
              About me
            </SectionHeading>
          </HeadingWrapper>
        </ImageContainer>
        <StyledFlex flexDirection={'column'} width={['100%', '50%']}>
          <P mb={4}>
            A self-motivated software engineer who seeks to leverage my skills
            particularly in ReactJS into a workplace environment, and
            anticipates to to challenge myself as a better software engineer
            along my career path.
          </P>
          <ButtonContainer>
            <Button onClick={() => scrollTo('project')} mr={3}>
              View Works
            </Button>
            <Button link={CV} inverted>
              Download Resume
            </Button>
          </ButtonContainer>
        </StyledFlex>
      </Flex>
    </Section>
  );
};

export default AboutMeSection;
