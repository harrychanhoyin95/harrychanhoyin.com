import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography } from 'styled-system';

const H1 = styled.h1`
  ${space}
  ${typography}
`;

const H2 = styled.h2`
  ${space}
  ${typography}
`;

const H3 = styled.h3`
  ${space}
  ${typography}
`;

const H4 = styled.h4`
  ${space}
  ${typography}
`;

const H5 = styled.h5`
  ${space}
  ${typography}
`;

const H6 = styled.h6`
  ${space}
  ${typography}
`;

const Heading = ({ level, m, mt, mb, children, fontSize, ...props }) => {
  switch (level) {
    case 1:
      return (
        <H1 m={m} mt={mt} mb={mb} fontSize={fontSize} {...props}>
          {children}
        </H1>
      );
    case 2:
      return (
        <H2 m={m} mt={mt} mb={mb} fontSize={fontSize} {...props}>
          {children}
        </H2>
      );
    case 3:
      return (
        <H3 m={m} mt={mt} mb={mb} fontSize={fontSize} {...props}>
          {children}
        </H3>
      );
    case 4:
      return (
        <H4 m={m} mt={mt} mb={mb} fontSize={fontSize} {...props}>
          {children}
        </H4>
      );
    case 5:
      return (
        <H5 m={m} mt={mt} mb={mb} fontSize={fontSize} {...props}>
          {children}
        </H5>
      );
    case 6:
      return (
        <H6 m={m} mt={mt} mb={mb} fontSize={fontSize} {...props}>
          {children}
        </H6>
      );
    default:
      return (
        <H1 m={m} mt={mt} mb={mb} fontSize={fontSize} {...props}>
          {children}
        </H1>
      );
  }
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
  m: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
};

export default Heading;
