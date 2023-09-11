import React from 'react';
import { render } from '@testing-library/react';

import HeroAvatar from './HeroAvatar'

describe("HeroAvatar", () => {
  test("renders the HeroAvatar Component", () => {
    render(
      <HeroAvatar
        title={'Example Blog Card'}
        description={'Testing Blog Card'}
      />
    );
  })
})