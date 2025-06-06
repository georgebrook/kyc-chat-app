import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Icon from './index';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'The ID of the icon in the sprite (e.g., "arrow-left")',
    },
    desc: {
      control: 'text',
      description: 'Optional description for accessibility',
    },
    size: {
      control: { type: 'number', min: 8, max: 128 },
      description: 'Width and height of the icon in pixels',
    },
  },
  args: {
    name: 'check',
    size: 24,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'lock',
    desc: 'Lock icon',
  },
};

export const Decorative: Story = {
  args: {
    name: 'new-page',
    desc: '',
  },
};

export const CustomSize: Story = {
  args: {
    name: 'chat',
    desc: 'Chat icon',
    size: 48,
  },
};
