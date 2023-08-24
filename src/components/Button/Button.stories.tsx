import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'developerwithout/Button',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Text: Story = (args) => (
    <Button {...args} />
);
Text.args = {
    size: 'sm',
    color: 'primary',
    variant: 'text',
    round: false,
    disabled: false,
    children: "Text of Doom",
    onClick: () => {console.log('Button clicked')}
}