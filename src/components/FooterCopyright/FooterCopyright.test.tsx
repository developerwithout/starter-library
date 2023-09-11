import React from 'react';
import { render } from '@testing-library/react';

import FooterCopyright from './FooterCopyright'

describe("FooterCopyright", () => {
  test("renders the FooterCopyright Component", () => {
    render(
      <FooterCopyright site_name={'LogicLabs'} />
    );
  })
})