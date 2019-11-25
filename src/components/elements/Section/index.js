import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

const StyledSection = styled.section`
  ${space}
  ${layout}
`;

const Section = ({ children, margin, px, py, pt, pb, width }) => {
  return (
    <StyledSection
      margin={margin}
      px={px}
      py={py}
      pt={pt}
      pb={pb}
      width={width}
    >
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Section;
