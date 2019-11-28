/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { space, position } from 'styled-system';
import Img from 'gatsby-image';

import Header from './molecules/Header';
import GlobalStyle from '../globalStyle';
import getTheme from '../utils/getTheme';
import DarkModeContext from '../context/DarkModeContext';

const Content = styled.main`
  margin-left: ${props => (props.sidebarOpen ? '60%' : '0')};
  filter: ${props => (props.sidebarOpen ? 'blur(8px)' : 'none')};
  transition: all 0.3s;

  ${space}
`;

const SidebarOverlay = styled.div`
  position: fixed;
  visibility: ${props => (props.sidebarOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.sidebarOpen ? 1 : 0)};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  transition: all 0.3s;
`;

const LogoOverlay = styled.div`
  position: fixed;
  height: 64px;
  width: 64px;
  opacity: 0.2;

  ${position}
`;

const Layout = ({ children, sidebarOpen, toggleSidebarOpen, ...props }) => {
  return (
    <StaticQuery
      query={graphql`
        query layoutQuery {
          site {
            siteMetadata {
              title
            }
          }
          desktop: file(relativePath: { eq: "logo-transparent.png" }) {
            childImageSharp {
              fixed(width: 64) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <DarkModeContext.Consumer>
          {mode => {
            const { dark, toggleDark } = mode;
            const theme = getTheme(dark ? 'dark' : 'light');
            return (
              <ThemeProvider theme={theme}>
                <GlobalStyle sidebarOpen={sidebarOpen} dark={dark} />
                <Header
                  siteTitle={data.site.siteMetadata.title}
                  sidebarOpen={sidebarOpen}
                  toggleSidebarOpen={toggleSidebarOpen}
                  toggleDark={toggleDark}
                  dark={dark}
                  {...props}
                />
                <Content sidebarOpen={sidebarOpen} pt={[6, 0]}>
                  {children}
                </Content>
                <SidebarOverlay
                  sidebarOpen={sidebarOpen}
                  onClick={() => toggleSidebarOpen()}
                />
                <LogoOverlay bottom={[32, 32]} right={[16, 32]}>
                  <Img fixed={data.desktop.childImageSharp.fixed} />
                </LogoOverlay>
              </ThemeProvider>
            );
          }}
        </DarkModeContext.Consumer>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebarOpen: PropTypes.bool,
  toggleSidebarOpen: PropTypes.func,
};

export default Layout;
