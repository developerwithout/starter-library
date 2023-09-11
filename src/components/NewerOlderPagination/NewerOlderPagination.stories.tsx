import { Meta, StoryObj } from "@storybook/react";
import NewerOlderPagination from "./NewerOlderPagination";

const meta: Meta<typeof NewerOlderPagination> = {
  component: NewerOlderPagination,
  title: 'LogicLabs/Components/NewerOlderPagination',
  tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof NewerOlderPagination>;

export const Base: Story ={
  args: {
    previous: '#',
    next: '#'
  }
}