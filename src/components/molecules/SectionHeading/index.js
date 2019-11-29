import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { layout } from 'styled-system';

import Heading from '../../elements/Heading';

const StyledHeading = styled(Heading)`
  position: relative;
  text-align: ${props => (props.center ? 'center' : 'unset')};

  &:after {
    content: '';
    position: absolute;
    left: ${props => (props.center ? '50%' : 0)};
    height: 2px;
    bottom: -24px;
    background-color: #9147ff;
    transform: ${props => (props.center ? 'translate(-50%, -50%)' : 'none')};

    ${layout}
  }
`;

const SectionHeading = ({ children, overlay, center, mb }) => {
  return (
    <StyledHeading
      level={1}
      fontSize={48}
      mt={0}
      mb={mb ? mb : 5}
      overlay={overlay}
      center={center}
      width={overlay ? '30%' : ['30%', '10%']}
    >
      {children}
    </StyledHeading>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.bool,
  center: PropTypes.bool,
  mb: PropTypes.number,
};

export default SectionHeading;
