import { Meta, StoryObj } from '@storybook/nextjs-vite';
import MessageView from './index';

const meta: Meta<typeof MessageView> = {
  title: 'Organisms/MessageView',
  component: MessageView,
  tags: ['autodocs'],
  argTypes: {
    sender: {
      control: { type: 'radio' },
      options: ['desktop', 'mobile'],
      description: 'Current sender',
    },
  },
  args: {
    sender: 'desktop',
  },
};

export default meta;
type Story = StoryObj<typeof MessageView>;

export const Desktop: Story = {
  args: {
    sender: 'desktop',
  },
};

export const Mobile: Story = {
  args: {
    sender: 'mobile',
  },
};
 

// TODO: fix this