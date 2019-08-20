import React from 'react';

import FilterLink from './FilterLink';
import * as C from '../constants/index';


/**
 * renders links which can be used to filter
 */
const FilterBar = () => (
  <p>
    Show:
    {' '}
    <FilterLink
      filter={C.SHOW_ALL}
    >
      ALL
    </FilterLink>
    {' '}
    <FilterLink
      filter={C.SHOW_INCOMPLETE}
    >
      ACTIVE
    </FilterLink>
    {' '}
    <FilterLink
      filter={C.SHOW_COMPLETED}
    >
      COMPLETE
    </FilterLink>
    {' '}
  </p>
);

export default FilterBar;
