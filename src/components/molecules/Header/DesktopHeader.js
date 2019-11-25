import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import ToggleSwitch from '../../elements/ToggleSwitch';

const Nav = styled.nav`
  ${layout}
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;

  ${space}
`;

const MenuItem = styled.div`
  ${space}
`;

const DesktopHeader = ({ headerItems, display }) => {
  return (
    <Nav display={display}>
      <Menu mx={3}>
        {headerItems.map(item => {
          return (
            <MenuItem key={item} padding={4}>
              {item}
            </MenuItem>
          );
        })}
        <MenuItem padding={4}>
          <ToggleSwitch onChange={() => console.log('toggled')} />
        </MenuItem>
      </Menu>
    </Nav>
  );
};

DesktopHeader.propTypes = {
  headerItems: PropTypes.array,
  display: PropTypes.array,
};

export default DesktopHeader;
