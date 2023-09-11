import React from 'react';
import { render } from '@testing-library/react';

import PaginationHeader from './PaginationHeader'

describe("PaginationHeader", () => {
  test("renders the PaginationHeader Component", () => {
    render(
      <PaginationHeader
        title={'PaginationHeader'}
        description={'PaginationHeader description'}
      />
    );
  })
})