import { Meta, StoryObj } from '@storybook/nextjs-vite';
import TextInput from './index';

const meta: Meta<typeof TextInput> = {
  title: 'Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'The current input value',
    },
    onChange: {
      action: 'changed',
      description: 'Callback when input value changes',
    },
    onEnterPress: {
      action: 'enter pressed',
      description: 'Callback when Enter key is pressed',
    },
    className: {
      control: 'text',
      description: 'Optional CSS class',
    },
  },
  args: {
    value: '',
    className: '',
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    value: '',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello world',
  },
};
