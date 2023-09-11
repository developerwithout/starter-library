import type {Meta, StoryObj} from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'LogicLabs/Icons/Icon',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const BaseIcon: Story = {
  args: {
  }
}