import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Running Test for JDix Button', () => {
    test("Check Button Disabled", () => {
        render(<Button children={ 'Button' } disabled/>)
        expect(screen.getByRole('button', {name: "Button"})).toBeDisabled();
    })
})

