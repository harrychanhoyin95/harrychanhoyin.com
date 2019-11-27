import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography, color, space } from 'styled-system';

const Span = styled.span`
  transition: 0.3s all;

  ${color}
  ${typography}
  ${space}
`;

const Text = ({ children, ...props }) => {
  return <Span {...props}>{children}</Span>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
