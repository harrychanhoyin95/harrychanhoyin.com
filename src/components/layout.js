/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from 'styled-components';
import { space } from 'styled-system';

import Header from './molecules/Header';
import Footer from './footer';

const Content = styled.main`
  margin-left: ${props => props.sidebarOpen ? '60%' : '0'};
  transition: all 0.3s;

  ${space}
`;

const Overlay = styled.div`
  position: fixed;
  visibility: ${props => props.sidebarOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.sidebarOpen ? 1 : 0};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  transition: all 0.3s;
`;

const Layout = ({ children, sidebarOpen, setSidebarOpen, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header
        siteTitle={data.site.siteMetadata.title}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        {...props}
      />
        <Content sidebarOpen={sidebarOpen} pt={6} px={4}>{children}</Content>
        <Overlay sidebarOpen={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}/>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  sidebarOpen: PropTypes.bool,
  setSidebarOpen: PropTypes.func,
};

export default Layout;
