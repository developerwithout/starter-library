import React from 'react';
import { render } from '@testing-library/react';

import NavbarTwoColumns from './NavbarTwoColumns'

describe("NavbarTwoColumns", () => {
  test("renders the NavbarTwoColumns Component", () => {
    render(
      <NavbarTwoColumns><></></NavbarTwoColumns>
    );
  })
})