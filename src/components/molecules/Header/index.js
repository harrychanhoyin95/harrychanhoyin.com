import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import DesktopHeader from './DesktopHeader';
import MobileSidebar from './MobileSidebar';

const Header = ({ ...props }) => {
  const data = useStaticQuery(graphql`
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
`);

  const headerItems = data.allContentfulHeader.edges[0].node.headerItems.items;

  return (
    <header>
      <DesktopHeader headerItems={headerItems} display={['none', 'block']} />
      <MobileSidebar headerItems={headerItems} display={['flex', 'none']} {...props} />
    </header>
  );
};

export default Header;
