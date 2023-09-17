import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './Navbar'

describe("Navbar", () => {
  test("renders the Navbar Component", () => {
    render(
      <Navbar><></></Navbar>
    );
  })
})