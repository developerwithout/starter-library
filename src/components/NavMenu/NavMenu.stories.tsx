import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import NavMenu from './NavMenu'

const meta: Meta<typeof NavMenu> = {
  component: NavMenu,
  title: 'LogicLabs/Components/NavMenu',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NavMenu>;

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