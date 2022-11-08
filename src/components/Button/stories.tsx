import type { Meta, Story } from '@storybook/react';

import Button from '.';
import { ButtonProps } from './types';

export default {
  component: Button,
  title: 'Base/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const RoundedContained = Template.bind({});
RoundedContained.args = {
  label: 'Button',
  variant: 'contained',
};

export const RoundedOutlined = Template.bind({});
RoundedOutlined.args = {
  label: 'Button',
  variant: 'outlined',
};

export const SquareContained = Template.bind({});
SquareContained.args = {
  label: 'Button',
  variant: 'contained',
  edges: 'square',
};

export const SquareOutlined = Template.bind({});
SquareOutlined.args = {
  label: 'Button',
  variant: 'outlined',
  edges: 'square',
};

export const Text = Template.bind({});
Text.args = {
  label: 'Button',
  variant: 'text',
};
