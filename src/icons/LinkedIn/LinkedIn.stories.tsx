import type {Meta, StoryObj} from '@storybook/react';
import LinkedInIcon from './LinkedIn';

const meta: Meta<typeof LinkedInIcon> = {
  component: LinkedInIcon,
  title: 'LogicLabs/Icons/LinkedIn',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof LinkedInIcon>;

export const BaseIcon: Story = {
  args: {}
}

export const WithWidthOnly: Story = {
  args: {
    width: 24,
  }
}

export const WithHeightOnly: Story = {
  args: {
    height: 24,
  }
}

export const WithHeightWidth: Story = {
  args: {
    ...WithWidthOnly.args,
    ...WithHeightOnly.args,
  }
}