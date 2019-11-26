import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout } from 'styled-system';
import startCase from 'lodash/startCase';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import scrollTo from '../../../utils/scroller';

const Nav = styled.nav`
  ${layout}
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

  &:hover {
    opacity: 0.5;
  }
`;

const DesktopHeader = ({ headerItems, display }) => {
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
    <Nav display={display}>
      <Menu mx={3}>
        <Logo fluid={imageData} />
        {headerItems.map(item => {
          return (
            <MenuItem key={item} padding={4} onClick={() => scrollTo(item)}>
              {startCase(item)}
            </MenuItem>
          );
        })}
      </Menu>
    </Nav>
  );
};

DesktopHeader.propTypes = {
  headerItems: PropTypes.array,
  display: PropTypes.array,
};

export default DesktopHeader;
