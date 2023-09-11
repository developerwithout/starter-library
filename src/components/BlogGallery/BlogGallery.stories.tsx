import { Meta, StoryObj } from '@storybook/react'
import BlogGallery from './BlogGallery'

const meta: Meta<typeof BlogGallery> = {
  component: BlogGallery,
  title: 'LogicLabs/Components/BlogGallery',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof BlogGallery>;

export const noCards: Story = {
  args: {
    list: []
  }
}

export const singleCard: Story = {
  args: {
    list: [
      
    ]
  }
}

export const MultipleCards2: Story = {
  args: {
    list: [
      {
        link: '',
        title: 'Title 1',
        description: 'Description 1',
      },
      {
        link: '',
        title: 'Title 2',
        description: 'Description 2',
        
        imgSrc: 'https://picsum.photos/200/300?random=1',
        imgAlt: 'Random image from Lorem Picsum',
      }
    ]
  }
}

export const MultiCards3: Story = {
  args: {
    list: [
      {
        link: '',
        title: 'Title 1',
        description: 'Description 1',
      },
      {
        link: '',
        title: 'Title 2',
        description: 'Description 2',
        
        imgSrc: 'https://picsum.photos/200/300?random=1',
        imgAlt: 'Random image from Lorem Picsum',
      },
      {
        link: '',
        title: 'Title 3',
        description: 'Description 3',
        
        imgSrc: 'https://picsum.photos/200/300?random=2',
        imgAlt: 'Random image from Lorem Picsum',

        publishDate: new Date(Date.now())
      }
    ]
  }
}