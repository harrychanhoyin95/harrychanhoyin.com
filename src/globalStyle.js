import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    background-color: #FFF;
    overflow: ${props => (props.sidebarOpen ? 'hidden' : 'unset')};
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-variant: tabular-nums;
    font-feature-settings: 'tnum', "tnum";
    transition: 0.3s all;
    text-rendering: optimizeLegibility;
    line-height: 24px;
  }
`;

export default GlobalStyle;
