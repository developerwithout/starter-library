import type { Meta, StoryObj } from "@storybook/react";
import FooterCopyright from './FooterCopyright'

const meta: Meta<typeof FooterCopyright> = {
  component: FooterCopyright,
  title: 'LogicLabs/Components/FooterCopyright',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof FooterCopyright>;

export const FooterCopyrightDefault:Story = {
  args: {
    site_name: 'LogicLabs'
  }
}