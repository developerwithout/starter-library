import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import Gallery from './Gallery'
import Card from '../Card/Card';

const meta: Meta<typeof Gallery> = {
  component: Gallery,
  title: 'LogicLabs/Components/BlogGallery',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Gallery>;

export const noCards: Story = {
  args: {
  }
}

export const singleCard: Story = {
  args: {
    children: Array.from({ length: 1 }).map((_, indx) => (
      <Card link={''} title={`Title $${indx}`} description={`Description ${indx}`} />
    )),
  }
}

export const MultipleCards2: Story = {
  args: {
    children: Array.from({ length: 1 }).map((_, indx) => (
      <Card
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
      <Card
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