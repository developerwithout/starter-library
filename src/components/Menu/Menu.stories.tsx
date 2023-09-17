import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import Menu from './Menu'

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: 'LogicLabs/Components/Menu',
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Base: Story = {
  args: {
    children: <li>Menu Item</li>
  }
}

export const MenuItems2: Story = {
  args: {
    children: <><li className="menuitem">MenuItems</li>
    <li className="menuitem">MenuItems</li></>
  }
}

export const MenuItems3: Story = {
  args: {
    children: <><li className="menuitem">Menu Item</li>
    <li className="menuitem">Menu Item 1</li>
    <li className="menuitem">Menu Item 2</li></>
  }
}