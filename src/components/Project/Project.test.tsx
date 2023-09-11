import React from 'react';
import { render } from '@testing-library/react';

import Project from './Project'

describe("Project", () => {
  test("renders the Project Component", () => {
    render(<Project title={'Example Project'} link={'https://www.example.com/'} />)
  })
})