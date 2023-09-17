import type { Meta, StoryObj } from "@storybook/react";
import Card from './Card'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'LogicLabs/Components/Card',
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Base: Story = {
  args: {
    link: '',
    title: 'Title 1',
    description: 'Description 1',
  }
}

export const CardWithImage: Story = {
  args: {
    ...Base.args,
    image: {
      src: 'https://picsum.photos/200/300?random=1',
      alt: 'Random image from Lorem Picsum',
    }

  }
}

export const CardNoImageWithDate: Story = {
  args: {
    ...Base.args,

    publishDate: new Date(Date.now())
  }
}

export const FullCard: Story = {
  args: {
    ...Base.args,

    image: {
      src: 'https://picsum.photos/200/300?random=2',
      alt: 'Random image from Lorem Picsum',
    },

    publishDate: new Date(Date.now())
  }
}