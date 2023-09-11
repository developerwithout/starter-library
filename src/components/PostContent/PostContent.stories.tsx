import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PostContent from './PostContent';

const meta: Meta<typeof PostContent> = {
  component: PostContent,
  title: 'LogicLabs/Components/PostContent',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PostContent>;

export const Base: Story = {
  args: {
    children: <></>,
  }
}

export const WithImageNoAlt: Story = {
  args: {
    ...Base.args,
    image: {
      src: 'https://picsum.photos/200/300'
    }
  }
}

export const WithImageAlt: Story = {
  args: {
    ...Base.args,
    image: {
      src: 'https://picsum.photos/200/300?random=1',
      alt: 'Random Image from Picsum'
    }
  }
}