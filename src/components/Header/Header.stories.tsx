import { Meta, StoryObj } from "@storybook/react";
import Header from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'LogicLabs/Components/Header',
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Base: Story = {
  args: {
    post: {
      title: 'Some Amazing Post',
    },
    author: 'LogicLabs'
  }
};

export const WithDate: Story = {
  args: {
    ...Base.args,
    post: {
      title: "Another Amazing Post",
      publicationDate: new Date('December 17, 1995 03:24:00'),
    }
  }
}