import type { Meta, StoryObj } from "@storybook/react";
import Copyright from './Copyright'

const meta: Meta<typeof Copyright> = {
  component: Copyright,
  title: 'LogicLabs/Components/Copyright',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Copyright>;

export const CopyrightDefault:Story = {
  args: {
    site_name: 'LogicLabs'
  }
}