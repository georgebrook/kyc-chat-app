import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MessageNode from './index';

const meta: Meta<typeof MessageNode> = {
  title: 'Atoms/MessageNode',
  component: MessageNode,
  tags: ['autodocs'],
  argTypes: {
    sender: {
      control: { type: 'radio' },
      options: ['desktop', 'mobile'],
      description: 'The sender of the message',
    },
    currentSender: {
      control: { type: 'radio' },
      options: ['desktop', 'mobile'],
      description: 'The current active sender',
    },
    className: {
      control: 'text',
      description: 'Custom class name (optional)',
    },
    modifiers: {
      control: 'object',
      description: 'Optional BEM-style modifiers',
    },
    children: {
      control: 'text',
      description: 'Message content',
    },
  },
  args: {
    sender: 'desktop',
    currentSender: 'desktop',
    children: 'Hello from the desktop!',
    modifiers: [],
  },
};


export default meta;
type Story = StoryObj<typeof MessageNode>;

export const DesktopCurrent: Story = {
  args: {
    sender: 'desktop',
    currentSender: 'desktop',
    children: 'Message from desktop (current).',
  },
};

export const MobileNotCurrent: Story = {
  args: {
    sender: 'mobile',
    currentSender: 'desktop',
    children: 'Message from mobile (not current).',
  },
};

export const WithModifiers: Story = {
  args: {
    sender: 'mobile',
    currentSender: 'mobile',
    modifiers: ['highlight', 'first'],
    children: 'Mobile message with modifiers.',
  },
};

export const WithCustomClassName: Story = {
  args: {
    sender: 'desktop',
    currentSender: 'mobile',
    className: 'custom-class',
    children: 'Desktop message with custom class.',
  },
};
