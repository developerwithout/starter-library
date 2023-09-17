import React from 'react';
import { render } from '@testing-library/react';

import Copyright from './Copyright'

describe("Copyright", () => {
  test("renders the Copyright Component", () => {
    render(
      <Copyright site_name={'LogicLabs'} />
    );
  })
})