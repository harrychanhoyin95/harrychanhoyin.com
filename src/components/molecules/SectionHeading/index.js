import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../elements/Heading';

const SectionHeading = ({ children }) => {
  return (
    <Heading level={1} fontSize={40} mt={0} mb={3}>
      {children}
    </Heading>
  );
};

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeading;
