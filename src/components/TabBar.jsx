import React from 'react';

import TabLink from './TabLink';
import * as C from '../constants';

/**
 * renders component to allow switching between adding a new todo and viewing todo info
 */
const TabBar = () => (
  <nav
    className="uk-navbar-container uk-navbar uk-navbar-transparent" role="navigation"
    aria-label="main navigation"
  >
    <ul className="uk-tab">

      <TabLink
        mode={C.LIST}
      >
        VIEW ALL
      </TabLink>

      <TabLink
        mode={C.EDIT}
      >
        ADD NEW
      </TabLink>

    </ul>
  </nav>
);

export default TabBar;
