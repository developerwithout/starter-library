import React from 'react';
import { render } from '@testing-library/react';

import GradientText from './GradientText'

describe("GradientText", () => {
  test("renders the GradientText Component", () => {
    render(
      <GradientText>Testing</GradientText>
    );
  })
})