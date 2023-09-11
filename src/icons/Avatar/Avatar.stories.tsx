import type {Meta, StoryObj} from '@storybook/react';
import AvatarIcon from './Avatar';

const meta: Meta<typeof AvatarIcon> = {
  component: AvatarIcon,
  title: 'LogicLabs/Icons/Avatar',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof AvatarIcon>;

export const BaseIcon: Story = {
  args: {}
}

export const WithWidthOnly: Story = {
  args: {
    width: 632,
  }
}

export const WithHeightOnly: Story = {
  args: {
    height: 821,
  }
}

export const WithHeightWidth: Story = {
  args: {
    ...WithWidthOnly.args,
    ...WithHeightOnly.args,
  }
}