import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Heading from './index';

const meta: Meta<typeof Heading> = {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1 to h6)',
    },
    children: {
      control: 'text',
      description: 'Heading content',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class',
    },
  },
  args: {
    level: 1,
    children: 'Heading Text',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const Subtitle: Story = {
  args: {
    level: 2,
    children: 'Subtitle Level 2',
  },
};

export const Large: Story = {
  args: {
    level: 3,
    children: 'Large Heading Level 3',
  },
};

export const Medium: Story = {
  args: {
    level: 4,
    children: 'Medium Heading Level 4',
  },
};

export const Small: Story = {
  args: {
    level: 5,
    children: 'Small Heading Level 5',
  },
};

export const Tiny: Story = {
  args: {
    level: 6,
    children: 'Tiny Heading Level 6',
  },
};
