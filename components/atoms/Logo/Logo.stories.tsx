import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Logo from './index';

const meta: Meta<typeof Logo> = {
  title: 'Misc/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: 'Color of the wave shape',
      defaultValue: '#000000',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    color: '#000000',
  },
};

export const BlueWave: Story = {
  args: {
    color: '#007BFF',
  },
};

export const RedWave: Story = {
  args: {
    color: '#FF0000',
  },
};
