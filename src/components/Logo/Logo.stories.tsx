import { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'LogicLabs/Components/Logo',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Logo>;
export const base: Story ={
  args: {
    name: 'LogicLabs' 
  }
}

// export const withIcon: Story = {
//   args: {
//     ...base.args,
//     icon: <LogoIcon width={24}/>
//   }
// }