import React from 'react';
import { render } from '@testing-library/react';

import NavMenuItem from './NavMenuItem'

describe("NavMenuItem", () => {
  test("renders the NavMenuItem Component", () => {
    render(
      <NavMenuItem href="">Nav Item</NavMenuItem>
    );
  })
})