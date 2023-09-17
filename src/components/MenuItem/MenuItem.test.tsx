import React from 'react';
import { render } from '@testing-library/react';

import MenuItem from './MenuItem'

describe("MenuItem", () => {
  test("renders the MenuItem Component", () => {
    render(
      <MenuItem href="">Nav Item</MenuItem>
    );
  })
})