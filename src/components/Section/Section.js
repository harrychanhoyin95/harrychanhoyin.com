import React from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

const Section = ({ children, className, sectionId }) => {
  return (
    <Element name={sectionId} id={sectionId}>
      <section
        className={`px-12 py-24 md:px-72 md:py-28 ${className}`}
        id={sectionId}
      >
        {children}
      </section>
    </Element>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  sectionId: PropTypes.string,
};

export default Section;
