import React from 'react';
import { render } from '@testing-library/react';

import Logo from './Logo'

describe("Logo", () => {
  test("renders the Logo Component", () => {
    render(
      <Logo name={'LogicLabs'}/>
    );
  })
})