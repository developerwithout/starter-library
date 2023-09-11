import React from 'react';
import { render } from '@testing-library/react';

import Section from './Section'

describe("Section", () => {
  test("renders the Section Component", () => {
    render(<Section title="Section Title">Hello World!</Section>)
  })
})