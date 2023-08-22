import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Running Test for JDix Button', () => {
    test("Check Button Disabled", () => {
        render(<Button text="Button jdix" disabled />)
        expect(screen.getByRole('button', {name: "Button jdix"})).toBeDisabled();
    })
})

