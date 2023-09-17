import React from 'react';
import { render } from '@testing-library/react';

import Content from './Content'

describe("Content", () => {
  test("renders the Content Component", () => {
    render(
      <Content><></></Content>
    );
  })
})