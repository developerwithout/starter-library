import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import MenuItem from './MenuItem'

const meta: Meta<typeof MenuItem> = {
  component: MenuItem,
  title: 'LogicLabs/Components/MenuItem',
}

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Base: Story = {
  args: {
    href: '#',
    children: 'Nav Menu Item'
  }
}

export const TargetBlank: Story = {
  args: {
    ...Base.args,
    target: '_blank',
  }
}

export const TagetSelf: Story = {
  args: {
    ...Base.args,
    target: '_self',
  }
}

export const TagetParent: Story = {
  args: {
    ...Base.args,
    target: '_parent',
  }
}

export const TargetTop: Story = {
  args: {
    ...Base.args,
    target: '_top',
  }
}

export const TargetCustom: Story = {
  args: {
    ...Base.args,
    target: '_custom',
  }
}
