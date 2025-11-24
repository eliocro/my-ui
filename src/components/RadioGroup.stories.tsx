import { useState } from 'react';
import { StoryFn } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

export default {
  title: 'Components / Radio Group',
  component: RadioGroup,
  args: {
    onChange: fn(),
  },
};

const Template = (args: RadioGroupProps) => {
  const [value, setValue] = useState('light');
  return <RadioGroup {...args} value={value} onChange={setValue} />;
};

export const Default: StoryFn<RadioGroupProps> = Template.bind({});
Default.args = {
  label: 'Mode',
  name: 'mode',
  options: [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ],
};
