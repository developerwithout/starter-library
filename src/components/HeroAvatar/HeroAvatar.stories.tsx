import { Meta, StoryObj } from '@storybook/react';
import HeroAvatar from './HeroAvatar';

const meta: Meta<typeof HeroAvatar> = {
  component: HeroAvatar,
  title: 'LogicLabs/Components/HeroAvatar',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof HeroAvatar>;
export const base: Story = {
  args: {
    title: 'Hero Avatar',
    description: 'Avatar Description. Reprehenderit aliquip minim ex adipisicing veniam reprehenderit ad duis id sunt pariatur. Elit voluptate ea anim esse est est labore esse excepteur non Lorem nostrud veniam. Ea tempor laboris duis esse voluptate dolor cillum exercitation officia proident velit enim nulla. Nulla eiusmod eu aliqua eiusmod veniam enim.',
  }
}