import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import NavBarTwoColumns from './NavbarTwoColumns';

const meta: Meta<typeof NavBarTwoColumns> = {
  component: NavBarTwoColumns,
  title: 'LogicLabs/Components/NavBarTwoColumns',
  tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof NavBarTwoColumns>;

export const Base: Story = {
  args: {
    children: <><div>Logo</div><div>Menu</div></>
  }
}