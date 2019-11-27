import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, color, space } from 'styled-system';
import startCase from 'lodash/startCase';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import BurgerBar from './BurgerBar';
import Flex from '../../elements/Flex';
import scrollTo from '../../../utils/scroller';
import 'antd/es/switch/style/index.css';

const BurgerButton = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  height: 24px;
  width: 32px;
  cursor: pointer;

  ${layout}
  ${color}
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

  ${color}
  ${layout}
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
  ${color}
`;

const Logo = styled(Img)`
  top: 32px;
  right: 32px;
  height: 32px;
  width: 32px;
`;

const SwitchWrapper = styled.div`
  position: absolute;
  bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Moon = styled(FontAwesomeIcon)`
  transition: all 0.3s;
  height: 18px;

  && {
    width: 18px;
  }

  ${color}
  ${space}
`;

const ToggleButton = styled(Switch)`
  transition: 0.3s all;

  &.ant-switch-checked {
    background-color: #9147ff;
  }
`;

const FixedNav = styled.div`
  position: fixed;
  width: 100%;
  top: ${props => (props.headerShow ? '0' : '-100px')};
  transition: 0.3s all;
  z-index: 99;

  ${layout}
  ${color}
`;

const MobileSidebar = ({
  headerItems,
  display,
  sidebarOpen,
  toggleSidebarOpen,
  dark,
  toggleDark,
  headerShow,
}) => {
  const data = useStaticQuery(graphql`
    query MobileHeaderQuery {
      desktop: file(relativePath: { eq: "logo-transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <Fragment>
      <FixedNav
        headerShow={headerShow}
        height={96}
        bg={'header'}
        display={display}
      >
        <BurgerButton onClick={() => toggleSidebarOpen()} color="burgerButton">
          <BurgerBar top={'0'} />
          <BurgerBar top={'40%'} />
          <BurgerBar top={'80%'} />
        </BurgerButton>
        <Logo fluid={imageData} style={{ position: 'absolute' }} />
      </FixedNav>
      <Nav display={display} sidebarOpen={sidebarOpen} bg="sidebar">
        <CloseBtn onClick={() => toggleSidebarOpen()} color="text">
          &times;
        </CloseBtn>
        <Flex flexDirection={'column'}>
          {headerItems.map(item => {
            return (
              <MenuItem
                key={item}
                py={3}
                color={'navText'}
                onClick={() => scrollTo(item)}
              >
                {startCase(item)}
              </MenuItem>
            );
          })}
        </Flex>
        <SwitchWrapper>
          <Moon icon={faMoon} color={'heading'} mr={2} />
          <ToggleButton onChange={() => toggleDark()} checked={dark} />
        </SwitchWrapper>
      </Nav>
    </Fragment>
  );
};

MobileSidebar.propTypes = {
  headerItems: PropTypes.array,
  display: PropTypes.array,
  sidebarOpen: PropTypes.bool,
  toggleSidebarOpen: PropTypes.func,
  dark: PropTypes.bool,
  toggleDark: PropTypes.func,
  headerShow: PropTypes.bool,
};

export default MobileSidebar;
