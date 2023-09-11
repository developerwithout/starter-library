import type {Meta, StoryObj} from '@storybook/react';
import DownloadIcon from './Download';

const meta: Meta<typeof DownloadIcon> = {
  component: DownloadIcon,
  title: 'LogicLabs/Icons/Download',
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof DownloadIcon>;

export const BaseIcon: Story = {
  args: {}
}

export const WithWidthOnly: Story = {
  args: {
    width: 24,
  }
}

export const WithHeightOnly: Story = {
  args: {
    height: 24,
  }
}

export const WithHeightWidth: Story = {
  args: {
    ...WithWidthOnly.args,
    ...WithHeightOnly.args,
  }
}