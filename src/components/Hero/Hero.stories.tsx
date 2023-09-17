import { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  component: Hero,
  title: 'LogicLabs/Components/Hero',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Hero>;
export const base: Story = {
  args: {
    title: 'Hero Avatar',
    description: 'Avatar Description. Reprehenderit aliquip minim ex adipisicing veniam reprehenderit ad duis id sunt pariatur. Elit voluptate ea anim esse est est labore esse excepteur non Lorem nostrud veniam. Ea tempor laboris duis esse voluptate dolor cillum exercitation officia proident velit enim nulla. Nulla eiusmod eu aliqua eiusmod veniam enim.',
  }
}