import type {Meta, StoryObj} from '@storybook/react';
import BrandIcon from './Brand';

const meta: Meta<typeof BrandIcon> = {
  component: BrandIcon,
  title: 'LogicLabs/Icons/Brand',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof BrandIcon>;

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