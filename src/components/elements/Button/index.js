import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, border, space, layout } from 'styled-system';

const Anchor = styled.a`
  width: 100%;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: 1px solid;
  padding: 16px 20px;
  font-weight: bold;
  height: 100%;

  ${color}
  ${border}
  ${space}
  ${layout}
`;

const DisabledButton = styled(StyledButton)`
  cursor: not-allowed;
`;

const Button = ({
  link,
  children,
  onClick,
  color,
  borderColor,
  backgroundColor,
  shape,
  width,
  inverted,
  disabled,
  ...props
}) => {
  if (disabled) {
    return (
      <DisabledButton
        borderColor={'#999CA6'}
        color={'#999CA6'}
        backgroundColor={'#FFF'}
        borderRadius={shape === 'rounded' ? 1 : 0}
        width={width}
        {...props}
      >
        {children}
      </DisabledButton>
    );
  }

  if (link) {
    return (
      <Anchor href={link}>
        <StyledButton
          borderColor={borderColor}
          color={inverted ? borderColor : color}
          backgroundColor={inverted ? color : backgroundColor}
          borderRadius={shape === 'rounded' ? 1 : 0}
          width={width}
          {...props}
        >
          {children}
        </StyledButton>
      </Anchor>
    );
  }

  return (
    <StyledButton
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      {...props}
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
  width: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  inverted: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: 'primary',
  color: '#FFF',
  borderColor: 'primary',
  shape: 'rounded',
  width: '100%',
  disabled: false,
};

export default Button;
