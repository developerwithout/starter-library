import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Tag from './Tag'

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'LogicLabs/Components/Tag',
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  args: {
    children: <>I am a Tag</>
  }
}

export const ColoredTag: Story = {
  args: {
    ...Base.args,
    color: 'BLUE'
  }
}

export const WithEmoji: Story = {
  args: {
    children: <>I am a Tag with an Emoji 👍</>
  }
}

export const WithIcon: Story = {
  args: {
    children: (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_7_63)">
        <rect y="24" width="33.9411" height="33.9411" rx="5" transform="rotate(-45 0 24)" fill="#265C73" />
        <path d="M31.08 31.08L37.8682 24.2917L31.08 17.5035M17.5035 17.5035L10.7153 24.2917L17.5035 31.08M27.007 12.0729L21.5765 36.5106" stroke="#E0C8AB" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_7_63">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>),
  }
}