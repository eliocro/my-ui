import { fn } from 'storybook/test';
import Button from './Button';

export default {
  title: 'Components / Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
  },
};

export const Default = {
  args: {
    label: 'Button',
    disabled: false,
  },
};
