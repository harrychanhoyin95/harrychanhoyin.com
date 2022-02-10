import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, title, onClick, isReversed, isLink, linkSrc }) => {
  const bgColor = isReversed ? 'bg-buttonTextColor' : 'bg-primary';
  const textColor = isReversed ? 'text-primary' : 'text-buttonTextColor';
  const defaultBtnStyle = `${bgColor} ${textColor} py-4 px-24 w-100 font-bold rounded text-center`;

  if (isLink) {
    return (
      <a
        href={linkSrc}
        target="_blank"
        rel="noreferrer"
        className={`${defaultBtnStyle} ${className}`}
      >
        {title}
      </a>
    );
  }

  return <button className={`${defaultBtnStyle} ${className}`}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  isLink: PropTypes.bool,
  isReversed: PropTypes.bool,
};

export default Button;
