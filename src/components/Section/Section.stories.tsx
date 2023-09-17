import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import Section from './Section'

const meta: Meta<typeof Section> ={
  component: Section,
  title: 'LogicLabs/Components/Section',
}

export default meta;

type Story = StoryObj<typeof Section>;

export const Base: Story = {
  args: {
    children: <>I am a Child of Section</>
  }
}

export const WithTitle: Story = {
  args: {
    ...Base.args,
    title: <>I Have a Title</>
  }
}