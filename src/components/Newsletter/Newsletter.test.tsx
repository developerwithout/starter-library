import React from 'react';
import { render } from '@testing-library/react';

import Newsletter from './Newsletter'

describe("Newsletter", () => {
  test("renders the Newsletter Component", () => {
    render(
      <Newsletter
        title={'Newsletter'}
        description={'Newsletter description'}
      />
    );
  })
})