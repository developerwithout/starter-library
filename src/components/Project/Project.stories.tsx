import { Meta, StoryObj } from "@storybook/react";
import Project from './Project';

const meta: Meta<typeof Project> = {
  component: Project,
  title: 'LogicLabs/Components/Project',
  
};

export default meta;

type Story = StoryObj<typeof Project>;

export const Base: Story = {
  args: {
    title: 'Some Project',
    link: '#',
  }
}