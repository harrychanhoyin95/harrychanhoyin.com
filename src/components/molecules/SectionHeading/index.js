import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Heading from '../../elements/Heading';

const StyledHeading = styled(Heading)`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: ${props => (props.overlay ? '30%' : '10%')};
    height: 2px;
    bottom: -24px;
    background-color: #9147ff;
  }
`;

const SectionHeading = ({ children, overlay }) => {
  return (
    <StyledHeading level={1} fontSize={40} mt={0} mb={5} overlay={overlay}>
      {children}
    </StyledHeading>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
  overlay: PropTypes.bool,
};

export default SectionHeading;
