import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: 'LogicLabs/Components/Navbar',
}

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Base: Story = {
  args: {
    children: <><div>Logo</div><div>Menu</div></>
  }
}