import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout, color } from 'styled-system';
import { Element } from 'react-scroll';

const StyledSection = styled.section`
  padding-bottom: 128px;

  ${space}
  ${layout}
  ${color}
`;

const Section = ({ children, margin, width, bg, name, ...props }) => {
  return (
    <StyledSection
      margin={margin}
      px={[4, 7]}
      pt={[4, 5]}
      width={width}
      bg={bg}
      {...props}
    >
      <Element name={name}>{children}</Element>
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  bg: PropTypes.string,
  name: PropTypes.string,
};

export default Section;
