import React from 'react';
import { render } from '@testing-library/react';

import Hero from './Hero'

describe("HeroAvatar", () => {
  test("renders the HeroAvatar Component", () => {
    render(
      <Hero
        title={'Example Blog Card'}
        description={'Testing Blog Card'}
      />
    );
  })
})