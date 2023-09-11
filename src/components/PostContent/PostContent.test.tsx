import React from 'react';
import { render } from '@testing-library/react';

import PostContent from './PostContent'

describe("PostContent", () => {
  test("renders the PostContent Component", () => {
    render(
      <PostContent><></></PostContent>
    );
  })
})