/* eslint-disable react/prop-types */
import React from 'react';
const defaultState = {
  sidebarOpen: false,
  toggleSidebarOpen: () => {},
};

const SidebarContext = React.createContext(defaultState);
class SidebarProvider extends React.Component {
  state = {
    sidebarOpen: false,
  };
  toggleSidebarOpen = () => {
    let sidebarOpen = !this.state.sidebarOpen;
    console.log('sidebarOpen', sidebarOpen);
    this.setState({ sidebarOpen });
  };
  render() {
    const { children } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <SidebarContext.Provider
        value={{
          sidebarOpen,
          toggleSidebarOpen: this.toggleSidebarOpen,
        }}
      >
        {children}
      </SidebarContext.Provider>
    );
  }
}
export default SidebarContext;
export { SidebarProvider };
