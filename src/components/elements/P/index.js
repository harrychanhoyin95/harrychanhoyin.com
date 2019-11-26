import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

const StyledP = styled.p`
  margin-top: 0;

  ${space}
  ${typography}
`;

const P = ({ children, fontWeight, fontSize, mb, ...props }) => {
  return (
    <StyledP fontWeight={fontWeight} mb={mb} fontSize={fontSize} {...props}>
      {children}
    </StyledP>
  );
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number,
  mb: PropTypes.number,
};

export default P;
