import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { position } from 'styled-system';

const Bar = styled.span`
  position: absolute;
  height: 20%;
  left: 0px;
  right: 0px;
  opacity: 1;
  background-color: #373a47;

  ${position}
`;

const BurgerBar = ({ top }) => {
  return (
    <Bar top={top}></Bar>
  );
};

BurgerBar.propTypes = {
  top: PropTypes.string.isRequired,
};

export default BurgerBar;
