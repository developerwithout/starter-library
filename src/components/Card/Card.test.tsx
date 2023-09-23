import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card'

describe("Card", () => {
  test("renders the BlogCard Component", () => {
    render(
      <Card
        link={'https://www.example.com'}
        title={'Example Blog Card'}
        description={'Testing Blog Card'}
      />
    );
  })
})