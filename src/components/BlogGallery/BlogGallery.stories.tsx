import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import BlogGallery from './BlogGallery'
import BlogCard from '../BlogCard/BlogCard';

const meta: Meta<typeof BlogGallery> = {
  component: BlogGallery,
  title: 'LogicLabs/Components/BlogGallery',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof BlogGallery>;

export const noCards: Story = {
  args: {
  }
}

export const singleCard: Story = {
  args: {
    children: Array.from({ length: 1 }).map((_, indx) => (
      <BlogCard link={''} title={`Title $${indx}`} description={`Description ${indx}`} />
    )),
  }
}

export const MultipleCards2: Story = {
  args: {
    children: Array.from({ length: 1 }).map((_, indx) => (
      <BlogCard
        link={''}
        title={`Title $${indx}`}
        description={`Description ${indx}`}
        image={{
          src: `https://picsum.photos/200/300?random=${indx}`,
          alt: 'Random image from Lorem Picsum',
        }}
      />
    ))
  }
}

export const MultiCards3: Story = {
  args: {
    children: Array.from({ length: 3 }).map((_, indx) => (
      <BlogCard
        link={''}
        title={`Title $${indx}`}
        description={`Description ${indx}`}
        image={{
          src: `https://picsum.photos/200/300?random=${indx}`,
          alt: 'Random image from Lorem Picsum',
        }}
      />
    ))
  }
}