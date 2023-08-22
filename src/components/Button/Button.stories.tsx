import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'developerwithout/Button',
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Primary.args = {
    color: 'primary',
    disabled: false,
    text: 'Primary'
}

export const Secondary: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Secondary.args = {
    color: 'secondary',
    disabled: false,
    text: 'Secondary'
}

export const Success: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Success.args = {
    color: 'success',
    disabled: false,
    text: 'Success'
}

export const Error: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Error.args = {
    color: 'error',
    disabled: false,
    text: 'Error'
}

export const Info: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Info.args = {
    color: 'info',
    disabled: false,
    text: 'Info'
}

export const Warning: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Warning.args = {
    color: 'warning',
    disabled: false,
    text: 'Warning'
}

export const Disabled: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Disabled.args = {
    color: 'primary',
    disabled: true,
    text: 'Disabled'
}

export const Text: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Text.args = {
    color: 'primary',
    disabled: false,
    text: 'Text Variant',
    variant: 'text'
}
export const Contained: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Contained.args = {
    color: 'primary',
    disabled: false,
    text: 'Contained Variant',
    variant: 'contained'
}
export const Outlined: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Outlined.args = {
    color: 'primary',
    disabled: false,
    text: 'Outlined Variant',
    variant: 'outlined'
}

export const Small: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Small.args = {
    color: 'primary',
    disabled: false,
    size: 'small',
    text: 'Small'
}

export const Medium: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Medium.args = {
    color: 'primary',
    disabled: false,
    size: 'medium',
    text: 'Medium'
}

export const Large: Story = (args) => (
    <Button data-testId='InputField-id' {...args} />
)
Large.args = {
    color: 'primary',
    disabled: false,
    size: 'lg',
    text: 'Large'
}

