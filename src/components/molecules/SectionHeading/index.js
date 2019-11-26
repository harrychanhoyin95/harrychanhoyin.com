import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../../elements/Heading';

const StyledHeading = styled(Heading)`
  position: relative;
  text-align: ${props => (props.center ? 'center' : 'unset')};

  &:after {
    content: '';
    position: absolute;
    left: ${props => (props.center ? '50%' : 0)};
    width: ${props => (props.overlay ? '30%' : '10%')};
    height: 2px;
    bottom: -24px;
    background-color: #9147ff;
    transform: ${props => (props.center ? 'translate(-50%, -50%)' : 'none')};
  }
`;

const SectionHeading = ({ children, overlay, center }) => {
  return (
    <StyledHeading
      level={1}
      fontSize={40}
      mt={0}
      mb={5}
      overlay={overlay}
      center={center}
    >
      {children}
    </StyledHeading>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.bool,
  center: PropTypes.bool,
};

export default SectionHeading;
