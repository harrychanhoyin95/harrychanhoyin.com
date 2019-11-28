import { scroller } from 'react-scroll';

const scrollTo = name => {
  scroller.scrollTo(name, {
    duration: 1000,
    delay: 100,
    smooth: 'easeInOutQuart',
    offset: -120,
  });
};

export default scrollTo;
