import React from 'react';
import { render } from '@testing-library/react';

import Gallery from './Gallery';

describe("BlogCard", () => {
  test("renders the BlogCard Component", () => {
    render(
      <Gallery>Test</Gallery>
    );
  })
})