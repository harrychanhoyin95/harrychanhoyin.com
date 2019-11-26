import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, border, space } from 'styled-system';

const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid;
  padding: 16px 48px;

  ${color}
  ${border}
  ${space}
`;

const Button = ({
  link,
  children,
  onClick,
  color,
  borderColor,
  backgroundColor,
  shape,
}) => {
  if (link) {
    return (
      <a href={link}>
        <StyledButton
          borderColor={borderColor}
          color={color}
          backgroundColor={backgroundColor}
          borderRadius={shape === 'rounded' ? 1 : 0}
        >
          {children}
        </StyledButton>
      </a>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  shape: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: 'primary',
  color: '#FFF',
  borderColor: 'primary',
  shape: 'rounded',
};

export default Button;
