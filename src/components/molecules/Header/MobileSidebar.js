import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, color, space } from 'styled-system';
import startCase from 'lodash/startCase';

import BurgerBar from './BurgerBar';
import Flex from '../../elements/Flex';
import scrollTo from '../../../utils/scroller';

const BurgerButton = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  height: 24px;
  width: 32px;
  cursor: pointer;

  ${layout}
`;

const Nav = styled.nav`
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: ${props => (props.sidebarOpen ? '60%' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  overflow-x: hidden;
  transition: all 0.3s;

  ${layout}
  ${color}
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 48px;
  margin-left: 50px;
  cursor: pointer;

  ${color}
`;

const MenuItem = styled.div`
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  ${space}
`;

const MobileSidebar = ({
  headerItems,
  display,
  sidebarOpen,
  setSidebarOpen,
}) => {
  return (
    <Fragment>
      <BurgerButton
        display={display}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <BurgerBar top={'0'} />
        <BurgerBar top={'40%'} />
        <BurgerBar top={'80%'} />
      </BurgerButton>
      <Nav display={display} sidebarOpen={sidebarOpen} bg="sidebar">
        <CloseBtn onClick={() => setSidebarOpen(!sidebarOpen)} color="text">
          &times;
        </CloseBtn>
        <Flex flexDirection={'column'}>
          {headerItems.map(item => {
            return (
              <MenuItem key={item} py={3} onClick={() => scrollTo(item)}>
                {startCase(item)}
              </MenuItem>
            );
          })}
        </Flex>
      </Nav>
    </Fragment>
  );
};

MobileSidebar.propTypes = {
  headerItems: PropTypes.array,
  display: PropTypes.array,
  sidebarOpen: PropTypes.bool,
  setSidebarOpen: PropTypes.func,
};

export default MobileSidebar;
