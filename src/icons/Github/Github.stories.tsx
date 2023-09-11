import type {Meta, StoryObj} from '@storybook/react';
import GithubIcon from './Github';

const meta: Meta<typeof GithubIcon> = {
  component: GithubIcon,
  title: 'LogicLabs/Icons/Github',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof GithubIcon>;

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