import { Meta, StoryFn } from '@storybook/nextjs-vite';
import MessagesHeader from './index';

export default {
  title: 'Molecules/MessagesHeader',
  component: MessagesHeader,
  tags: ['autodocs'],
  argTypes: {
    sender: {
      control: { type: 'radio' },
      options: ['desktop', 'mobile'],
    },
    onBack: { action: 'back clicked' },
    onClearChat: { action: 'clear chat clicked' },
  },
} as Meta<typeof MessagesHeader>;

const Template: StoryFn<typeof MessagesHeader> = (args) => <MessagesHeader {...args} />;

export const Desktop = Template.bind({});
Desktop.args = {
  sender: 'desktop',
};

export const Mobile = Template.bind({});
Mobile.args = {
  sender: 'mobile',
};
