import React from 'react';
import { render } from '@testing-library/react';

import BlogGallery from './BlogGallery';

describe("BlogCard", () => {
  test("renders the BlogCard Component", () => {
    render(
      <BlogGallery>Test</BlogGallery>
    );
  })
})