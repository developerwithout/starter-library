import type { Meta, StoryObj } from '@storybook/react';
import PaginationHeader from './PaginationHeader';

const meta: Meta<typeof PaginationHeader> = {
  component: PaginationHeader,
  title: 'LogicLabs/Components/PaginationHeader',
};

export default meta;

type Story = StoryObj<typeof PaginationHeader>;

export const Base: Story = {
  args: {
    title: "Title",
    description: "Description. Deserunt incididunt quis quis ea nostrud in ullamco. Ad id quis dolor deserunt. Ex deserunt exercitation labore mollit incididunt do nisi. Nisi ea esse elit est reprehenderit eu velit voluptate. Aliqua aliquip qui ipsum cupidatat enim.",
  }
}