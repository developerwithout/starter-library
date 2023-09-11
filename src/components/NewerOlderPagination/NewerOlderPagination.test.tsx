import React from 'react';
import { render } from '@testing-library/react';

import NewOlderPagination from './NewerOlderPagination';
describe("NewOlderPagination", () => {
  test("renders the NewOlderPagination Component", () => {
    render(
      <NewOlderPagination previous={''} next={''} />
    );
  })
})