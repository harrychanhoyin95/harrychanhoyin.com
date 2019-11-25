import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Switch } from 'antd';

import 'antd/es/switch/style/index.css';

const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    ${color}
  }
`;

const ToggleSwitch = ({ size, onChange }) => {
  return <StyledSwitch size={size} onChange={onChange} bg="primary" />;
};

ToggleSwitch.propTypes = {
  size: PropTypes.string,
  onChange: PropTypes.func,
};

ToggleSwitch.defaultProps = {
  size: 'default',
  onChange: () => {},
};

export default ToggleSwitch;
