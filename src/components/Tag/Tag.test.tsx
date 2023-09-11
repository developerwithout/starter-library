import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('Tag', () => {
    test("renders the Tag Component", () => {
        render(<Tag color={'SLATE'}> am a tag.</Tag>);
    })
})

