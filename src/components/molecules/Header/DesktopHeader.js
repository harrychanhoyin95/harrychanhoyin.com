import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout, color } from 'styled-system';
import startCase from 'lodash/startCase';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Switch } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import scrollTo from '../../../utils/scroller';
import 'antd/es/switch/style/index.css';

const Nav = styled.nav`
  transition: 0.3s all;
  position: fixed;
  top: ${props => (props.headerShow ? '0' : '-100px')};
  width: 100%;
  z-index: 99;

  ${layout}
  ${color}
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;

  ${space}
`;

const Logo = styled(Img)`
  height: 48px;
  width: 48px;
  margin: auto auto auto 32px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  transition: all 0.3s;

  ${space}
  ${color}

  &:hover {
    opacity: 0.5;
  }
`;

const SwitchWrapper = styled.div`
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
  transition: all 0.3s;

  &.ant-switch-checked {
    background-color: #9147ff;
  }

  ${space}
`;

const DesktopHeader = ({
  headerItems,
  display,
  dark,
  toggleDark,
  headerShow,
}) => {
  const data = useStaticQuery(graphql`
    query DesktopHeaderQuery {
      desktop: file(relativePath: { eq: "logo_transparent.png" }) {
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
    <Nav display={display} bg={'header'} headerShow={headerShow}>
      <Menu mx={3}>
        <Logo fluid={imageData} />
        {headerItems.map(item => {
          return (
            <MenuItem
              key={item}
              padding={4}
              color={'navText'}
              onClick={() => scrollTo(item)}
            >
              {startCase(item)}
            </MenuItem>
          );
        })}
        <SwitchWrapper>
          <Moon icon={faMoon} color={'heading'} mr={2} />
          <ToggleButton onChange={() => toggleDark()} checked={dark} mr={3} />
        </SwitchWrapper>
      </Menu>
    </Nav>
  );
};

DesktopHeader.propTypes = {
  headerItems: PropTypes.array,
  display: PropTypes.array,
  dark: PropTypes.bool,
  toggleDark: PropTypes.func,
  headerShow: PropTypes.bool,
};

export default DesktopHeader;
