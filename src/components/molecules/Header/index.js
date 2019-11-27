import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import DesktopHeader from './DesktopHeader';
import MobileSidebar from './MobileSidebar';
import HeaderContext from '../../../context/HeaderContext';

const Header = ({ ...props }) => {
  return (
    <StaticQuery
      query={graphql`
        query HeaderQuery {
          allContentfulHeader {
            edges {
              node {
                headerItems {
                  items
                }
              }
            }
          }
        }
      `}
      render={data => {
        const headerItems =
          data.allContentfulHeader.edges[0].node.headerItems.items;
        return (
          <HeaderContext.Consumer>
            {header => {
              const { headerShow } = header;
              return (
                <header>
                  <DesktopHeader
                    headerItems={headerItems}
                    display={['none', 'block']}
                    headerShow={headerShow}
                    {...props}
                  />
                  <MobileSidebar
                    headerItems={headerItems}
                    display={['flex', 'none']}
                    headerShow={headerShow}
                    {...props}
                  />
                </header>
              );
            }}
          </HeaderContext.Consumer>
        );
      }}
    />
  );
};

export default Header;
