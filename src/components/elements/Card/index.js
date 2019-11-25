import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border, space } from 'styled-system';

const CardContainer = styled.div`
  border: 1px solid ${props => props.borderColor};

  ${border}
  ${space}
`;

const Card = ({ children, borderColor, shape, ...props }) => {
  return (
    <CardContainer
      borderColor={borderColor}
      borderRadius={shape === 'rounded' ? 1 : 0}
      {...props}
    >
      {children}
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  borderColor: PropTypes.string,
  shape: PropTypes.string,
};

Card.defaultProps = {
  borderColor: '#000',
  shape: 'rounded',
};

export default Card;
