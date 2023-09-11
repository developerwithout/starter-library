import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'LogicLabs/Components/Button',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
    size: 'sm',
    color: 'primary',
    variant: 'text',
    round: false,
    disabled: false,
    children: "Text Button",
    onClick: () => { console.log('Button clicked') }
  }
}