/* eslint-disable react/prop-types */
import React from 'react';

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

const DarkModeContext = React.createContext(defaultState);
// Getting dark mode information from OS!
// You need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;
class DarkModeProvider extends React.Component {
  state = {
    dark: false,
  };
  toggleDark = () => {
    let dark = !this.state.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    this.setState({ dark });
  };
  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem('dark'));
    if (lsDark) {
      this.setState({ dark: lsDark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
    }
  }
  render() {
    const { children } = this.props;
    const { dark } = this.state;
    return (
      <DarkModeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </DarkModeContext.Provider>
    );
  }
}
export default DarkModeContext;
export { DarkModeProvider };
