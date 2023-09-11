import { Meta, StoryObj } from "@storybook/react";
import PostHeader from './PostHeader';

const meta: Meta<typeof PostHeader> = {
  component: PostHeader,
  title: 'LogicLabs/Components/PostHeader',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PostHeader>;

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