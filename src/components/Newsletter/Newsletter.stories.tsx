import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Newsletter from './Newsletter';

const meta: Meta<typeof Newsletter> = {
  component: Newsletter,
  title: 'LogicLabs/Components/Newsletter',
}

export default meta;

type Story = StoryObj<typeof Newsletter>;

export const Base: Story = {
  args: {
    title:<>Title</>,
    description: <>Description. Dolor amet est laborum ut magna laboris. Quis ad sint pariatur aliqua reprehenderit. Labore cupidatat dolore est officia eu nisi Lorem mollit cillum ad.</>
  }
}