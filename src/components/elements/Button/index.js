import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, border, space } from 'styled-system';

const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid;
  border-radius: 16px;
  padding: 20px 28px;

  ${color}
  ${border}
  ${space}
`;

const Button = ({ link, children, onClick, borderColor, backgroundColor }) => {
  if (link) {
    return (
      <a href={link}>
        <StyledButton
          borderColor={borderColor}
          backgroundColor={backgroundColor}
        >
          {children}
        </StyledButton>
      </a>
    );
  }

  return (
    <StyledButton onClick={onClick} backgroundColor={backgroundColor}>
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
};

Button.defaultProps = {
  backgroundColor: '#FFF',
  borderColor: '#000',
};

export default Button;
