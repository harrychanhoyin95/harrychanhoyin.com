import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

const StyledSection = styled.section`
  padding-bottom: 128px;

  ${space}
  ${layout}
`;

const Section = ({ children, margin, px, py, pt, width }) => {
  return (
    <StyledSection margin={margin} px={px} py={py} pt={pt} width={width}>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  px: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  py: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  pt: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

export default Section;
