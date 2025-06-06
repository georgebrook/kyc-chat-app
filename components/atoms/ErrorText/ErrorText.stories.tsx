import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ErrorText from './index';

const meta: Meta<typeof ErrorText> = {
  title: 'Atoms/ErrorText',
  component: ErrorText,
  tags: ['autodocs'],
  args: {
    text: 'Something went wrong.',
  },
};

export default meta;

type Story = StoryObj<typeof ErrorText>;

export const Default: Story = {};

export const WithCustomClass: Story = {
  args: {
    text: 'Custom styled error.',
    className: 'error--big',
  },
};
