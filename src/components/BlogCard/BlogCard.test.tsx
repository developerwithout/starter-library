import React from 'react';
import { render } from '@testing-library/react';

import BlogCard from './BlogCard'

describe("BlogCard", () => {
  test("renders the BlogCard Component", () => {
    render(
      <BlogCard
        link={'https://www.example.com'}
        title={'Example Blog Card'}
        description={'Testing Blog Card'}
      />
    );
  })
})