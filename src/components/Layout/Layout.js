import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
