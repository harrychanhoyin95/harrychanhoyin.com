import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const StyledSection = styled.section`
  ${space}
`;

const Section = ({ children, padding, margin }) => {
  return (
    <StyledSection padding={padding} margin={margin}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
  margin: PropTypes.number,
};

export default Section;
