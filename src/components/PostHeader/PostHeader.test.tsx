import React from 'react';
import { render } from '@testing-library/react';

import PostHeader from './PostHeader'

describe("PostHeader", () => {
  test("renders the PostHeader Component", () => {
    render(
      <PostHeader post={{
        title: 'Some Post',
        publicationDate: new Date('September 11, 2003')
      }} author={'LogicLabs'} />
    );
  })
})