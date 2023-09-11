import { Meta, StoryObj } from "@storybook/react";
import GradientText from './GradientText';

const meta: Meta<typeof GradientText> = {
  component: GradientText,
  title: 'LogicLabs/Components/GradientText',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof GradientText>;

export const text: Story = {
  args: {
    children: "Hello World!"
  }
}