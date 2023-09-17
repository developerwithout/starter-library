import React from 'react';
import { render } from '@testing-library/react';

import Menu from './Menu'

describe("Menu", () => {
  test("renders the Menu Component", () => {
    render(
      <Menu><></></Menu>
    );
  })
})