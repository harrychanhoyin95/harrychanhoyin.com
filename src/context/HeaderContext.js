/* eslint-disable react/prop-types */
import React from 'react';
import throttle from 'lodash/throttle';

const defaultState = {
  headerShow: true,
  scrollPos: 0,
};

const HeaderShowContext = React.createContext(defaultState);
class HeaderShowProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerShow: true,
      prevScrollPos: window.pageYOffset,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', throttle(this.handleScroll));
  }

  handleScroll() {
    const { prevScrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const headerShow = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      headerShow,
    });
  }

  render() {
    const { children } = this.props;
    const { headerShow } = this.state;
    return (
      <HeaderShowContext.Provider value={{ headerShow }}>
        {children}
      </HeaderShowContext.Provider>
    );
  }
}
export default HeaderShowContext;
export { HeaderShowProvider };
