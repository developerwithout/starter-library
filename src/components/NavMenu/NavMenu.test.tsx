import React from 'react';
import { render } from '@testing-library/react';

import NavMenu from './NavMenu'

describe("NavMenu", () => {
  test("renders the NavMenu Component", () => {
    render(
      <NavMenu><></></NavMenu>
    );
  })
})