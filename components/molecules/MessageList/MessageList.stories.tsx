import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MessageList from './index';
import { Message } from '@/types/Messaging';

const sampleMessages: Message[] = [
  { id: '1', sender: 'desktop', text: 'Hello from desktop!' },
  { id: '2', sender: 'mobile', text: 'Hey there, this is mobile.' },
  { id: '3', sender: 'desktop', text: 'How are you?' },
];

const meta: Meta<typeof MessageList> = {
  title: 'Molecules/MessageList',
  component: MessageList,
  tags: ['autodocs'],
  argTypes: {
    currentSender: {
      control: { type: 'radio' },
      options: ['desktop', 'mobile'],
      description: 'Current sender context',
    },
    messages: {
      description: 'Array of message objects',
      control: { type: 'object' },
    },
  },
  args: {
    messages: sampleMessages,
    currentSender: 'desktop',
  },
};

export default meta;
type Story = StoryObj<typeof MessageList>;

export const Default: Story = {
  args: {
    currentSender: 'desktop',
    messages: sampleMessages,
  },
};

export const MobileSender: Story = {
  args: {
    currentSender: 'mobile',
    messages: sampleMessages,
  },
};
