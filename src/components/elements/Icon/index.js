import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout, border } from 'styled-system';

const Img = styled.img`
  display: block;

  ${layout}
  ${border}
`;

const Icon = ({ src, height, width, borderRadius, ...props }) => {
  return (
    <Img
      src={src}
      height={height}
      width={width}
      borderRadius={borderRadius}
      {...props}
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
};

Icon.defaultProps = {
  height: '65px',
  width: '65px',
  borderRadius: '50%',
};

export default Icon;
