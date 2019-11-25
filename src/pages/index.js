import React, { useState } from "react";
import { ThemeProvider } from 'styled-components';

import Layout from "../components/layout";
import theme from '../theme';
import GlobalStyle from '../globalStyle';

const IndexPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        <div>Hello world</div>
      </Layout>
   </ThemeProvider>
  );
};

export default IndexPage;
