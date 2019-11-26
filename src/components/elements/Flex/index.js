import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, color, layout, flexbox } from 'styled-system';

const Div = styled.div`
  display: flex;

  ${flexbox}
  ${space}
  ${color}
  ${layout}
`;

const Flex = ({ children, flexDirection, width, ...props }) => {
  return (
    <Div flexDirection={flexDirection} width={width} {...props}>
      {children}
    </Div>
  );
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

Flex.defaultProps = {
  flexDirection: 'row',
};

export default Flex;
