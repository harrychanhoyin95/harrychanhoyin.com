import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { position, color } from 'styled-system';

const Bar = styled.span`
  position: absolute;
  height: 20%;
  left: 0px;
  right: 0px;
  opacity: 1;

  ${position}
  ${color}
`;

const BurgerBar = ({ top }) => {
  return <Bar top={top} bg={'burgerButton'}></Bar>;
};

BurgerBar.propTypes = {
  top: PropTypes.string.isRequired,
};

export default BurgerBar;
