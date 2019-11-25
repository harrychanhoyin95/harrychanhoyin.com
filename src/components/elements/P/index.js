import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledP = styled.p`
  margin-top: 0;
`;

const P = ({ children, ...props }) => {
  return <StyledP {...props}>{children}</StyledP>;
};

P.propTypes = {
  children: PropTypes.node.isRequired,
};

export default P;
