import React, { FC } from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default: FC = () => {
  return <Button text="hello world" onClick={() => console.log('click')} />;
};
