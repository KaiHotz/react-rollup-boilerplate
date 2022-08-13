import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Button, IButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
} as Meta<IButtonProps>;

export const Default: FC = () => {
  return <Button onClick={() => console.log('click')}>hello world</Button>;
};
