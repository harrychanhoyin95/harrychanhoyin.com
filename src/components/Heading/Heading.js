import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ title, isPrimary, className }) => {
  const hiddenColor = isPrimary ? '#1D1D1D' : '#222222';
  return (
    <h1
      className={`font-bold block text-5xl relative border-b-2 pb-1 mb-2 text-primary ${className}`}
      style={{
        'borderImage': `linear-gradient(to right, #FBC308 15%, ${hiddenColor} 15%) 100% 1`,
      }}
    >
      {title}
    </h1>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
};

export default Heading;
