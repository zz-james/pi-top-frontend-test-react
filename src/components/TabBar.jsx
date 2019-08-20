import React from 'react';

import TabLink from './TabLink';
import * as C from '../constants';

/**
 * renders component to allow switching between adding a new todo and viewing todo info
 */
const TabBar = () => (
  <div className="uk-position-relative tabbar">
    <nav
      className="uk-navbar-container uk-navbar uk-navbar-transparent uk-position-center" role="navigation"
      aria-label="main navigation"
    >
      <ul className="uk-tab">

        <TabLink
          mode={C.LIST}
        >
          VIEW TO-DOs
        </TabLink>

        <TabLink
          mode={C.EDIT}
        >
          ADD NEW
        </TabLink>

      </ul>
    </nav>
  </div>
);

export default TabBar;
