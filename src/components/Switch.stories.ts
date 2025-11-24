import { fn } from 'storybook/test';
import Switch from './Switch';

export default {
  title: 'Components / Switch',
  component: Switch,
  args: {
    onChange: fn(),
  },
};

export const Default = {
  args: {
    name: 'show-archived',
    label: 'Show archived items',
  },
};
