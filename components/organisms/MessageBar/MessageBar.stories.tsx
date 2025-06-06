import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MessageBar from './index';

const meta: Meta<typeof MessageBar> = {
  title: 'Organisms/MessageBar',
  component: MessageBar,
  tags: ['autodocs'],
  argTypes: {
    sender: {
      control: { type: 'radio' },
      options: ['desktop', 'mobile'],
      description: 'Current sender',
    },
    onError: { action: 'onError called' },
  },
  args: {
    sender: 'desktop',
  },
};

export default meta;
type Story = StoryObj<typeof MessageBar>;

export const Default: Story = {
  args: {
    sender: 'desktop',
  },
};

export const MobileSender: Story = {
  args: {
    sender: 'mobile',
  },
};
