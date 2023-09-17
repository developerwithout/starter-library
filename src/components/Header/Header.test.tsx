import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header'

describe("Header", () => {
  test("renders the Header Component", () => {
    render(
      <Header post={{
        title: 'Some Post',
        publicationDate: new Date('September 11, 2003')
      }} author={'LogicLabs'} />
    );
  })
})