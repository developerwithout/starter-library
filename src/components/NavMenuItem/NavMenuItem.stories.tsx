import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import NavMenuItem from './NavMenuItem'

const meta: Meta<typeof NavMenuItem> = {
  component: NavMenuItem,
  title: 'LogicLabs/Components/NavMenuItem',
  tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof NavMenuItem>;

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
