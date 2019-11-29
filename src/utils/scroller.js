import { scroller, animateScroll } from 'react-scroll';

export const scrollTo = name => {
  scroller.scrollTo(name, {
    duration: 1000,
    delay: 100,
    smooth: 'easeInOutQuart',
    offset: -120,
  });
};

export const scrollToTop = () => {
  animateScroll.scrollToTop({
    duration: 1000,
    delay: 100,
    smooth: 'easeInOutQuart',
  });
};
