import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

const StyledSection = styled.section`
  padding-bottom: 128px;

  ${space}
  ${layout}
  ${color}
`;

const Section = ({ children, margin, width, bg }) => {
  return (
    <StyledSection
      margin={margin}
      px={[4, 5]}
      pt={[4, 5]}
      width={width}
      bg={bg}
    >
      {children}
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
};

export default Section;
