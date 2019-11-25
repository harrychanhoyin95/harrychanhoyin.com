import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space } from 'styled-system';

const Div = styled.div`
  flex-direction: ${props => props.flexDirection};

  ${space}
`;

const Flex = ({ children, flexDirection, padding }) => {
  return (
    <Div flexDirection={flexDirection} padding={padding}>
      {children}
    </Div>
  );
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  flexDirection: PropTypes.string,
  padding: PropTypes.number,
};

Flex.defaultProps = {
  flexDirection: 'row',
};

export default Flex;
