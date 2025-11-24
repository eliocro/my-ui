import { useState } from 'react';
import { fn } from 'storybook/test';
import RadioGroup, { RadioGroupProps } from './RadioGroup';

export default {
  title: 'Components / Radio Group',
  component: RadioGroup,
  args: {
    onChange: fn(),
  },
};

export const Default = {
  args: {
    label: 'Mode',
    name: 'mode',
    options: [
      { label: 'Light', value: 'light' },
      { label: 'Dark', value: 'dark' },
    ],
  },
  render: (args: RadioGroupProps) => {
    const [value, setValue] = useState('light');
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  },
};
