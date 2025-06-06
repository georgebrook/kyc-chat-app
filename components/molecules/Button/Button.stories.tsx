import { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Molecules/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    iconPosition: {
      control: 'radio',
      options: ['before', 'after', 'only'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    onClick: () => alert('Button clicked!'),
  },
};

export const WithIconBefore: Story = {
  args: {
    children: 'Save',
    iconName: 'save',
    iconPosition: 'before',
    onClick: () => alert('Saved!'),
  },
};

export const WithIconAfter: Story = {
  args: {
    children: 'Lock',
    iconName: 'lock',
    iconPosition: 'after',
    onClick: () => alert('Lock!'),
  },
};

export const IconOnly: Story = {
  args: {
    children: 'Settings',
    iconName: 'settings',
    iconPosition: 'only',
    iconSize: 50,
    onClick: () => alert('Settings!'),
  },
};
