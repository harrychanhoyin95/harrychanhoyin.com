import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography, color } from 'styled-system';

const StyledP = styled.p`
  margin-top: 0;

  ${space}
  ${typography}
  ${color}
`;

const P = ({ children, fontWeight, fontSize, mb, color, ...props }) => {
  return (
    <StyledP
      fontWeight={fontWeight}
      mb={mb}
      fontSize={fontSize}
      color={color}
      {...props}
    >
      {children}
    </StyledP>
  );
};

P.propTypes = {
  children: PropTypes.node.isRequired,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.number,
  mb: PropTypes.number,
  color: PropTypes.string,
};

P.defaultProps = {
  color: 'text',
};

export default P;
